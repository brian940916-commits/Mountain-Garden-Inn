import { MenuCard } from './MenuCard'
import { useLanguage } from '../hooks/useLanguage'
import { CATEGORIES } from '../data/tags'
import type { MenuItem } from '../types/menu'

interface Props {
  category: string
  items: MenuItem[]
  onOpen: (item: MenuItem) => void
}

export function MenuSection({ category, items, onOpen }: Props) {
  const { lang } = useLanguage()
  const meta = CATEGORIES[category]
  const subLang = lang === 'zh' ? 'en' : 'zh'

  return (
    <section id={`sec-${category}`} className="px-3.5 pt-4 pb-1 scroll-mt-[90px]">
      <div className="flex items-baseline gap-3 mb-2.5 pb-2 border-b border-black/[.12]">
        <span className="font-serif font-black text-[22px] text-ink tracking-[4px]">{meta[lang]}</span>
        <span className="font-sans font-medium text-[11px] text-muted tracking-[2px] uppercase">{meta[subLang]}</span>
        <span className="ml-auto font-sans font-bold text-[11px] text-brick bg-brick/[.08] px-2 py-0.5 rounded-full">
          {items.length}
        </span>
      </div>
      {items.map(item => (
        <MenuCard key={item.id} item={item} onOpen={onOpen} />
      ))}
    </section>
  )
}
