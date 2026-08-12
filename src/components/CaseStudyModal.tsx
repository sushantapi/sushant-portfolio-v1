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
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [caseStudy, onClose])

  if (!caseStudy) return null

  return (
    <dialog ref={ref} className="m-auto max-h-[88vh] w-[min(760px,calc(100%-2rem))] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950 p-0 text-zinc-100 shadow-2xl">
      <div className="sticky top-0 flex items-center justify-between border-b border-white/8 bg-zinc-950/95 px-5 py-4 backdrop-blur sm:px-7">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-green-300">{caseStudy.label}</div>
          <h3 className="mt-1 text-xl font-semibold">{caseStudy.name}</h3>
        </div>
        <button type="button" onClick={() => ref.current?.close()} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
          Close
        </button>
      </div>

      <div className="space-y-7 px-5 py-6 sm:px-7 sm:py-8">
        {caseStudy.confidentialityNote && (
          <p className="rounded-xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-6 text-amber-100/85">
            {caseStudy.confidentialityNote}
          </p>
        )}

        <Detail title="Engineering Context" text={caseStudy.problem} />
        <Detail title="Backend Approach" text={caseStudy.approach} />

        <section>
          <h4 className="text-sm font-semibold text-zinc-100">Selected Engineering Work</h4>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
            {caseStudy.decisions.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </section>

        <section>
          <h4 className="text-sm font-semibold text-zinc-100">Backend Flow</h4>
          <div className="mt-3 overflow-x-auto rounded-xl border border-white/8 bg-black/20 p-4 font-mono text-sm text-green-300">
            {caseStudy.architecture}
          </div>
        </section>

        <section>
          <h4 className="text-sm font-semibold text-zinc-100">Technologies</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech) => <span key={tech} className="rounded-md border border-white/10 bg-white/4 px-2.5 py-1 text-xs text-zinc-300">{tech}</span>)}
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
      <h4 className="text-sm font-semibold text-zinc-100">{title}</h4>
      <p className="mt-2 text-sm leading-7 text-zinc-400">{text}</p>
    </section>
  )
}
