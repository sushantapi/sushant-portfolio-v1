import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { siteConfig } from '../data/site'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
      company: String(formData.get('company') || ''), // honeypot
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok) {
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
      <section id="contact" className="section-pad border-t border-slate-200 bg-slate-50/70">
        <div className="section-shell">
          <Reveal>
            <div className="card overflow-hidden p-6 sm:p-10 lg:p-12">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Open to Java Backend opportunities and selected backend projects.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">For hiring, interviews, referrals, or backend development discussions involving Java, Spring Boot, REST APIs, microservices, security, and database-driven applications, you can reach me directly.</p>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot field — hidden from real users, catches basic bots */}
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  <div>
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        disabled={status === 'submitting'}
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
                        placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={status === 'submitting'}
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
                        placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={2000}
                        rows={5}
                        disabled={status === 'submitting'}
                        className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
                        placeholder="Role, company, or what you'd like to discuss"
                    />
                  </div>

                  <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                      <p role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                        Thanks — your message has been sent. I'll get back to you soon.
                      </p>
                  )}
                  {status === 'error' && (
                      <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {errorMessage}
                      </p>
                  )}
                </form>

                <div className="flex flex-col justify-between gap-6">
                  <div className="flex flex-wrap gap-3">
                    <a href={`mailto:${siteConfig.email}`} className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Email Directly</a>
                    <a href={siteConfig.phoneHref} className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Call {siteConfig.phone}</a>
                    <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">LinkedIn</a>
                    <a href={siteConfig.github} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">GitHub</a>
                    {siteConfig.resumeAvailable && (
                        <a href={siteConfig.resumeUrl} download className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Download Resume</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
  )
}
