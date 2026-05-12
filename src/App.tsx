import { useState, useEffect, useRef } from 'react'
import { LanguageContext, useLanguageState } from './hooks/useLanguage'
import { Header } from './components/Header'
import { CategoryNav } from './components/CategoryNav'
import { MenuSection } from './components/MenuSection'
import { ItemDetailModal } from './components/ItemDetailModal'
import { menuRaw } from './data/menu-raw'
import { CATEGORY_ORDER } from './data/tags'
import { STORE_NAME, UI } from './data/site-info'
import type { MenuItem } from './types/menu'
import wallImg from './assets/interior-wall.png'

function useActiveCategory(): [string, React.RefObject<HTMLElement>] {
  const [active, setActive] = useState(CATEGORY_ORDER[0])
  const mainRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    function update() {
      const sections = document.querySelectorAll<HTMLElement>('.cat-section')
      const topbar = document.querySelector<HTMLElement>('.sticky-topbar')?.offsetHeight ?? 42
      const tabs = document.querySelector<HTMLElement>('.sticky-tabs')?.offsetHeight ?? 42
      const probe = topbar + tabs + 20
      let found = sections[0]
      for (const s of Array.from(sections)) {
        if (s.getBoundingClientRect().top - probe <= 0) found = s
        else break
      }
      if (found) setActive(found.id.replace('sec-', ''))
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return [active, mainRef]
}

export function App() {
  const langState = useLanguageState()
  const { lang } = langState
  const [modalItem, setModalItem] = useState<MenuItem | null>(null)
  const [activeCategory, mainRef] = useActiveCategory()

  return (
    <LanguageContext.Provider value={langState}>
      <div className="bg-[#2a2520] min-h-screen">
        <div className="max-w-phone mx-auto bg-paper min-h-screen relative overflow-x-hidden shadow-2xl">

          <Header />

          <CategoryNav activeCategory={activeCategory} />

          <main ref={mainRef}>
            {CATEGORY_ORDER.map(cat => {
              const items = menuRaw.filter(i => i.category === cat)
              if (!items.length) return null
              return (
                <MenuSection
                  key={cat}
                  category={cat}
                  items={items}
                  onOpen={setModalItem}
                />
              )
            })}
          </main>

          {/* Wall calligraphy strip */}
          <div className="mx-3.5 my-5 h-[92px] rounded relative overflow-hidden"
            style={{ backgroundImage: `url(${wallImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(246,239,225,.05), rgba(246,239,225,.55))' }} />
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 z-10 font-brush text-ink text-[20px] leading-[1.3] text-right tracking-[2px] max-w-[60%]">
              一碗白飯<br />一碗麵
              <em className="block not-italic font-sans font-medium text-[10px] text-ink-soft mt-1 tracking-wide">
                {UI.footer[lang] === UI.footer.zh ? 'A bowl of rice, a bowl of noodles' : UI.footer[lang]}
              </em>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-ink text-[#d9c79a] px-[18px] pt-7 pb-9 text-center" style={{ paddingBottom: 'max(36px, env(safe-area-inset-bottom))' }}>
            <div className="w-14 h-14 mx-auto mb-3 border-2 border-gold rounded-md flex items-center justify-center font-serif font-black text-[22px] text-[#f5d690] tracking-wide"
              style={{ transform: 'rotate(-3deg)' }}>
              山
            </div>
            <div className="font-serif text-base mb-2 tracking-[3px]">{UI.footer[lang]}</div>
            <div className="text-[11px] leading-[1.6] opacity-70">{STORE_NAME[lang]}</div>
            <div className="text-[11px] leading-[1.6] opacity-70">0910-572-658</div>
          </footer>

        </div>
      </div>

      <ItemDetailModal item={modalItem} onClose={() => setModalItem(null)} />
    </LanguageContext.Provider>
  )
}
