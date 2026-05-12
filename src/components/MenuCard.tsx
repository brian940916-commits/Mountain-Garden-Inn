import { TagBadge } from './TagBadge'
import { useLanguage } from '../hooks/useLanguage'
import type { MenuItem } from '../types/menu'
import { UI } from '../data/site-info'

interface Props {
  item: MenuItem
  onOpen: (item: MenuItem) => void
}

function formatPrice(value: number | 'market', marketText: string): string {
  if (value === 'market') return marketText
  return `NT$${value}`
}

export function MenuCard({ item, onOpen }: Props) {
  const { lang } = useLanguage()
  const note = item.note[lang]

  const imgSrc = item.image ? new URL(`../assets/${item.image}`, import.meta.url).href : null

  return (
    <div
      className="grid gap-3 py-3 border-b border-dotted border-black/[.12] cursor-pointer active:bg-brick/[.04] items-center"
      style={{ gridTemplateColumns: '84px 1fr auto' }}
      onClick={() => onOpen(item)}
    >
      {/* Thumbnail */}
      <div className="w-[84px] h-[84px] rounded-lg overflow-hidden bg-paper-2 relative flex items-center justify-center flex-shrink-0">
        {imgSrc ? (
          <img src={imgSrc} alt={item.names[lang]} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <span className="text-[38px]" style={{ filter: 'drop-shadow(0 1px 0 rgba(0,0,0,.08))' }}>{item.emoji}</span>
        )}
        {item.tags.includes('R') && (
          <span className="absolute top-0 left-0 bg-brick text-[#f5d690] font-sans font-bold text-[9px] px-1.5 py-0.5 rounded-br-md tracking-wide">★</span>
        )}
      </div>

      {/* Body */}
      <div className="min-w-0">
        <div className="font-sans font-bold text-base text-ink leading-[1.3] mb-1 break-words">{item.names[lang]}</div>
        {note && (
          <div className="font-sans font-medium text-[11px] text-muted leading-[1.3] mb-1.5">
            {note.split(';').join(' · ')}
          </div>
        )}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {item.tags.map(code => <TagBadge key={code} code={code} />)}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="text-right self-center min-w-[56px]">
        {item.price.length === 1 && !item.price[0].label ? (
          item.price[0].value === 'market' ? (
            <div className="font-serif font-black text-brick text-[14px]">{UI.market[lang]}</div>
          ) : (
            <>
              <span className="font-sans font-semibold text-[10px] text-muted">NT$</span>
              <span className="font-serif font-black text-[22px] text-brick leading-none tracking-[-0.5px]">{item.price[0].value}</span>
            </>
          )
        ) : (
          <div className="text-right text-[12px] text-ink-soft">
            {item.price.map((opt, i) => (
              <div key={i} className="flex justify-between gap-2 mb-0.5">
                <span className="text-muted font-medium">{opt.label ? opt.label[lang] : ''}</span>
                <span className="text-brick font-extrabold font-serif">{formatPrice(opt.value, UI.market[lang])}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
