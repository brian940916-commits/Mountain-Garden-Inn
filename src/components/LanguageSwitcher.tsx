import { useLanguage } from '../hooks/useLanguage'
import type { Lang } from '../types/menu'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'zh', label: '繁中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本' },
  { code: 'ko', label: '한국' },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="inline-flex bg-white/8 border border-white/20 rounded-full p-0.5">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`text-[11px] font-semibold px-2.5 py-1.5 rounded-full tracking-wide transition-colors ${
            lang === code
              ? 'bg-[#f5d690] text-ink'
              : 'text-[#d9c79a] hover:text-[#f5d690]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
