import { useEffect } from 'react'
import { TagBadge } from './TagBadge'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollLock } from '../hooks/useScrollLock'
import { UI } from '../data/site-info'
import { CATEGORIES } from '../data/tags'
import type { MenuItem } from '../types/menu'

interface Props {
  item: MenuItem | null
  onClose: () => void
}

export function ItemDetailModal({ item, onClose }: Props) {
  const { lang } = useLanguage()
  const isOpen = item !== null
  useScrollLock(isOpen)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!item) return null

  const imgSrc = item.image ? new URL(`../assets/${item.image}`, import.meta.url).href : null
  const desc = item.desc[lang]
  const note = item.note[lang]

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-[220ms] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sheet */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed left-1/2 bottom-0 w-full max-w-phone max-h-[92vh] bg-paper z-[101] rounded-t-2xl overflow-y-auto overscroll-contain shadow-2xl transition-transform duration-[280ms] cubic-bezier(.2,.8,.2,1) ${
          isOpen ? '-translate-x-1/2 translate-y-0' : '-translate-x-1/2 translate-y-full'
        }`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 border-0 text-[18px] text-ink cursor-pointer shadow-md flex items-center justify-center"
        >
          ✕
        </button>

        {/* Image */}
        <div className="w-full aspect-[4/3] bg-paper-2 flex items-center justify-center overflow-auto" style={{ touchAction: 'pinch-zoom' }}>
          {imgSrc ? (
            <img src={imgSrc} alt={item.names[lang]} className="w-full h-full object-cover" style={{ touchAction: 'pinch-zoom' }} />
          ) : (
            <span className="text-[120px]">{item.emoji}</span>
          )}
        </div>

        {/* Body */}
        <div className="px-[18px] pt-5 pb-7">
          <div className="font-sans font-semibold text-[11px] text-brick tracking-[3px] uppercase mb-1.5">
            {CATEGORIES[item.category]?.[lang] ?? item.category}
          </div>
          <h2 className="font-serif font-black text-[24px] text-ink leading-[1.2] mb-3">{item.names[lang]}</h2>

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tags.map(code => <TagBadge key={code} code={code} full />)}
            </div>
          )}

          {/* Price block */}
          <div className="bg-card border border-black/[.12] rounded-lg px-4 py-3.5 mb-4">
            {item.price.map((opt, i) => (
              <div
                key={i}
                className={`flex justify-between items-baseline py-1 ${i > 0 ? 'border-t border-dashed border-black/[.12] pt-2 mt-1' : ''}`}
              >
                <span className="font-sans font-semibold text-[13px] text-ink-soft">
                  {opt.label ? opt.label[lang] : UI.singlePrice[lang]}
                </span>
                <span className="font-serif font-black text-[22px] text-brick">
                  {opt.value === 'market' ? UI.market[lang] : `NT$${opt.value}`}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          {desc && desc.trim() && (
            <div className="mt-3.5">
              <div className="font-sans font-bold text-[11px] text-muted tracking-[3px] mb-1.5 uppercase">{UI.desc[lang]}</div>
              <div className="text-[13px] leading-[1.6] text-ink-soft">{desc}</div>
            </div>
          )}

          {/* Note */}
          {note && note.trim() && (
            <div className="mt-3.5">
              <div className="font-sans font-bold text-[11px] text-muted tracking-[3px] mb-1.5 uppercase">{UI.noteLabel[lang]}</div>
              <div className="text-[13px] leading-[1.6] text-ink-soft">
                {note.split(';').map((s, i) => <p key={i} className="m-0 mb-1">{s.trim()}</p>)}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
