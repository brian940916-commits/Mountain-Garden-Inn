import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '../hooks/useLanguage'
import { STORE_NAME, STORE_SUB, ADDRESS, PHONE, HOURS, NOTICES, UI } from '../data/site-info'
import heroImg from '../assets/storefront-hero.png'
import wallImg from '../assets/interior-wall.png'

export function Header() {
  const { lang } = useLanguage()

  return (
    <>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-3.5 py-2 border-b border-[rgba(213,176,114,.25)]"
        style={{ background: 'rgba(26,22,20,.96)', backdropFilter: 'blur(8px)' }}>
        <div className="flex items-center gap-1.5 font-serif font-black text-[15px] tracking-wide text-[#f5d690]">
          <span className="w-1.5 h-1.5 rounded-full bg-brick-lt" style={{ boxShadow: '0 0 0 2px rgba(213,176,114,.3)' }} />
          {STORE_NAME[lang]}
        </div>
        <LanguageSwitcher />
      </div>

      {/* Hero */}
      <header className="relative h-[360px] overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt={STORE_NAME.zh}
          className="w-full h-full object-cover opacity-[.82]"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(26,22,20,.05) 0%, rgba(26,22,20,.05) 45%, rgba(26,22,20,.85) 100%)'
        }} />
        {/* stamp */}
        <div className="absolute top-[18px] right-3.5 w-16 h-16 border-2 border-[#f5d690] rounded-lg flex flex-col items-center justify-center text-[#f5d690] bg-brick/85 z-10 shadow-lg"
          style={{ transform: 'rotate(-6deg)' }}>
          <span className="font-serif font-black text-[11px] tracking-[4px] mb-0.5">埔里</span>
          <span className="font-sans font-extrabold text-[13px] tracking-wide">EST</span>
        </div>
        {/* title */}
        <div className="absolute left-[18px] right-[18px] bottom-[26px] z-10 text-[#fbf1d8]">
          <div className="font-serif font-black text-[44px] leading-none tracking-[6px]" style={{ textShadow: '0 2px 16px rgba(0,0,0,.5)' }}>
            {STORE_NAME.zh}
          </div>
          <div className="mt-2.5 font-brush text-[17px] text-[#f5d690] tracking-[2px]">{STORE_SUB[lang]}</div>
          <div className="mt-1.5 font-sans font-medium text-[11px] tracking-[3px] uppercase opacity-70">PULI ‧ NANTOU ‧ TAIWAN</div>
        </div>
      </header>

      {/* Quick info strip */}
      <div className="grid grid-cols-3 bg-paper border-b border-black/[.12]">
        <a href="tel:0910572658" className="flex flex-col items-center gap-1 py-3 px-1.5 text-ink no-underline border-r border-black/[.12]">
          <span className="w-7 h-7 flex items-center justify-center text-brick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span className="text-[12px] font-semibold">{UI.callBtn[lang]}</span>
          <span className="text-[10px] text-muted font-medium">{PHONE[lang]}</span>
        </a>
        <a href="https://maps.google.com/?q=545南投縣埔里鎮桃米里桃米路33之1號" target="_blank" rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 px-1.5 text-ink no-underline border-r border-black/[.12]">
          <span className="w-7 h-7 flex items-center justify-center text-brick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </span>
          <span className="text-[12px] font-semibold">{UI.mapBtn[lang]}</span>
          <span className="text-[10px] text-muted font-medium">桃米路 33-1</span>
        </a>
        <div className="flex flex-col items-center gap-1 py-3 px-1.5">
          <span className="w-7 h-7 flex items-center justify-center text-brick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </span>
          <span className="text-[12px] font-semibold">{UI.hoursBtn[lang]}</span>
          <span className="text-[10px] text-muted font-medium">{HOURS[lang]}</span>
        </div>
      </div>

      {/* Address */}
      <div className="flex gap-3 items-start px-[18px] py-3.5 border-b border-dashed border-black/[.12] bg-paper">
        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-brick text-[#f5d690] flex items-center justify-center text-base">📍</div>
        <div className="text-[13px] leading-[1.55] text-ink-soft">{ADDRESS[lang]}</div>
      </div>

      {/* Announcement */}
      <div className="mx-3.5 mt-3.5 mb-1 bg-[#fffaee] border border-paper-3 rounded">
        <div className="flex items-center gap-2 px-3.5 pt-2.5 pb-1.5 font-serif font-bold text-[13px] text-brick tracking-[2px]">
          <span className="bg-brick text-[#f5d690] font-sans font-bold text-[10px] px-1.5 py-0.5 rounded-sm tracking-wide">
            {UI.announce[lang]}
          </span>
        </div>
        <ul className="m-0 pb-3 pl-[30px] pr-3.5 list-none">
          {NOTICES.map((notice, i) => (
            <li key={i} className="relative text-[12.5px] leading-[1.7] text-ink-soft before:content-['‧'] before:absolute before:-left-3.5 before:text-brick before:font-black">
              {notice[lang]}
            </li>
          ))}
        </ul>
      </div>

      {/* Wall strip — rendered after menu sections in App, but defined here for reuse */}
      <div className="hidden" id="wall-img-src" data-src={wallImg} />
    </>
  )
}
