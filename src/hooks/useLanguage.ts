import { createContext, useContext, useState, useCallback } from 'react'
import type { Lang } from '../types/menu'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'zh',
  setLang: () => undefined,
})

export function useLanguageState(): LanguageContextValue {
  const stored = localStorage.getItem('lang') as Lang | null
  const valid: Lang[] = ['zh', 'en', 'ja', 'ko']
  const initial: Lang = stored && valid.includes(stored) ? stored : 'zh'

  const [lang, setLangState] = useState<Lang>(initial)

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem('lang', l)
    setLangState(l)
  }, [])

  return { lang, setLang }
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext)
}
