import type { VercelRequest, VercelResponse } from '@vercel/node'

// --- Config -----------------------------------------------------------
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'sushant843120@gmail.com'
const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

// Simple in-memory rate limiter (per serverless instance; good enough to
// stop basic spam bursts on a low-traffic portfolio site).
const submissions = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 3

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const timestamps = (submissions.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
    timestamps.push(now)
    submissions.set(ip, timestamps)
    return timestamps.length > RATE_LIMIT_MAX
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = {
    name?: string
    email?: string
    message?: string
    company?: string // honeypot field – real users never fill this in
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS / method guard
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if (req.method === 'OPTIONS') {
        return res.status(204).end()
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
        return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' })
    }

    const body = req.body as ContactPayload

    // Honeypot: bots tend to fill every field, humans never see this one
    if (body.company) {
        return res.status(200).json({ ok: true })
    }

    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const message = (body.message || '').trim()

    if (!name || name.length < 2 || name.length > 100) {
        return res.status(400).json({ error: 'Please enter a valid name.' })
    }
    if (!email || !EMAIL_REGEX.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address.' })
    }
    if (!message || message.length < 10 || message.length > 2000) {
        return res.status(400).json({ error: 'Message should be between 10 and 2000 characters.' })
    }

    if (!RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured')
        return res.status(500).json({ error: 'Contact form is not configured yet. Please email directly instead.' })
    }

    try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: FROM_EMAIL,
                to: [TO_EMAIL],
                reply_to: email,
                subject: `Portfolio contact from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
          </div>
        `,
            }),
        })

        if (!emailResponse.ok) {
            const errText = await emailResponse.text()
            console.error('Resend API error:', errText)
            return res.status(502).json({ error: 'Could not send message right now. Please try emailing directly.' })
        }

        return res.status(200).json({ ok: true })
    } catch (err) {
        console.error('Contact form error:', err)
        return res.status(500).json({ error: 'Something went wrong. Please try emailing directly.' })
    }
}

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}
