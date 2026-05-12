import { TAGS } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'

interface Props {
  code: string
  full?: boolean
}

function tagClass(code: string): string {
  if (code === 'R') return 'inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-brick/10 text-brick leading-none'
  if (['1', '2', '3'].includes(code)) return 'inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 leading-none'
  if (['P', 'B', 'L'].includes(code)) return 'inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-900/10 text-amber-900 leading-none'
  if (['V', 'V5', 'H'].includes(code)) return 'inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-green-100 text-green-800 leading-none'
  return 'inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-paper-2 text-ink-soft leading-none'
}

export function TagBadge({ code, full = false }: Props) {
  const { lang } = useLanguage()
  const tag = TAGS[code]
  if (!tag) return null

  return (
    <span className={tagClass(code)}>
      <span>{tag.icon}</span>
      {full ? <span>{tag[lang]}</span> : <span>{tag[lang]}</span>}
    </span>
  )
}
