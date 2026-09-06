export type DiagramNode = {
    label: string
    sublabel?: string
}

export type DiagramRow = DiagramNode[]

function ArrowDown() {
    return (
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" aria-hidden="true" className="text-blue-300">
            <line x1="12" y1="0" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
            <path d="M4 16L12 26L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function ArchitectureDiagram({ rows, ariaLabel }: { rows: DiagramRow[]; ariaLabel?: string }) {
    return (
        <div role="img" aria-label={ariaLabel} className="flex flex-col items-center gap-0.5 py-2">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-col items-center">
                    <div className="flex flex-wrap items-stretch justify-center gap-3">
                        {row.map((node) => (
                            <div
                                key={node.label}
                                className="min-w-[140px] max-w-[220px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm"
                            >
                                <div className="text-sm font-semibold text-slate-900">{node.label}</div>
                                {node.sublabel && <div className="mt-1 text-xs leading-5 text-slate-500">{node.sublabel}</div>}
                            </div>
                        ))}
                    </div>
                    {rowIndex < rows.length - 1 && <ArrowDown />}
                </div>
            ))}
        </div>
    )
}
