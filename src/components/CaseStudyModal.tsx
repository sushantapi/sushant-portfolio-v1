import { useEffect, useRef } from 'react'
import type { CaseStudy } from '../data/caseStudies'

type Props = {
  caseStudy: CaseStudy | null
  onClose: () => void
}

export function CaseStudyModal({ caseStudy, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog || !caseStudy) return

    if (!dialog.open) dialog.showModal()

    const handleClose = () => onClose()
    const handleCancel = (event: Event) => {
      event.preventDefault()
      dialog.classList.add('dialog-closing')
      window.setTimeout(() => dialog.close(), 160)
    }

    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('cancel', handleCancel)
    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('cancel', handleCancel)
    }
  }, [caseStudy, onClose])

  if (!caseStudy) return null

  const closeWithAnimation = () => {
    const dialog = ref.current
    if (!dialog || dialog.classList.contains('dialog-closing')) return
    dialog.classList.add('dialog-closing')
    window.setTimeout(() => dialog.close(), 160)
  }

  return (
    <dialog ref={ref} className="m-auto max-h-[88vh] w-[min(760px,calc(100%-2rem))] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl">
      <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{caseStudy.label}</div>
          <h3 className="mt-1 text-xl font-semibold">{caseStudy.name}</h3>
        </div>
        <button type="button" onClick={closeWithAnimation} className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-950">
          Close
        </button>
      </div>

      <div className="space-y-7 px-5 py-6 sm:px-7 sm:py-8">
        {caseStudy.confidentialityNote && (
          <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
            {caseStudy.confidentialityNote}
          </p>
        )}

        <Detail title="Engineering Context" text={caseStudy.problem} />
        <Detail title="Backend Approach" text={caseStudy.approach} />

        <section>
          <h4 className="text-sm font-semibold text-slate-900">Selected Engineering Work</h4>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            {caseStudy.decisions.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </section>

        <section>
          <h4 className="text-sm font-semibold text-slate-900">Backend Flow</h4>
          <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm text-blue-700">
            {caseStudy.architecture}
          </div>
        </section>

        <section>
          <h4 className="text-sm font-semibold text-slate-900">Technologies</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech) => <span key={tech} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{tech}</span>)}
          </div>
        </section>

        <Detail title="My Contribution" text={caseStudy.contribution} />
        <Detail title="Outcome" text={caseStudy.outcome} />
      </div>
    </dialog>
  )
}

function Detail({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </section>
  )
}
