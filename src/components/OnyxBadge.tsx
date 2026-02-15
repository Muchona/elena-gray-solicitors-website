

const OnyxBadge = () => {
    return (
        <a
            href="https://www.onyxandcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
            <div className="font-bold text-lg tracking-wider text-slate-50">
                ONYX <span className="text-amber-400">&</span> CODE
            </div>
            <div className="text-[0.6rem] font-mono uppercase tracking-[0.25em] text-slate-400 group-hover:text-amber-400/80 transition-colors">
                Designed and Built by www.onyxandcode.com
            </div>
        </a>
    )
}

export default OnyxBadge
