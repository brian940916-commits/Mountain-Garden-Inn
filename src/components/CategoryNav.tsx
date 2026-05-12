import { useRef, useEffect } from 'react'
import { CATEGORY_ORDER, CATEGORIES } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'

interface Props {
  activeCategory: string
}

export function CategoryNav({ activeCategory }: Props) {
  const { lang } = useLanguage()
  const innerRef = useRef<HTMLDivElement>(null)

  function scrollTo(cat: string) {
    const target = document.getElementById(`sec-${cat}`)
    if (!target) return
    const topbar = document.querySelector<HTMLElement>('.sticky-topbar')?.offsetHeight ?? 42
    const tabs = document.querySelector<HTMLElement>('.sticky-tabs')?.offsetHeight ?? 42
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - (topbar + tabs + 8),
      behavior: 'smooth',
    })
  }

  // scroll active tab into view
  useEffect(() => {
    const btn = innerRef.current?.querySelector<HTMLElement>(`[data-cat="${activeCategory}"]`)
    if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeCategory])

  return (
    <nav className="sticky-tabs sticky top-[42px] z-40 bg-paper border-b border-black/[.12] overflow-x-auto overflow-y-hidden scrollbar-hide mt-2"
      style={{ scrollbarWidth: 'none' }}>
      <div ref={innerRef} className="inline-flex px-3 gap-0.5 whitespace-nowrap">
        {CATEGORY_ORDER.map(cat => (
          <button
            key={cat}
            data-cat={cat}
            onClick={() => scrollTo(cat)}
            className={`relative border-0 bg-transparent px-3 py-3 pb-2.5 font-sans font-semibold text-[13px] tracking-wide cursor-pointer transition-colors ${
              activeCategory === cat ? 'text-brick' : 'text-muted'
            }`}
          >
            {CATEGORIES[cat][lang]}
            {activeCategory === cat && (
              <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-brick rounded-sm" />
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
