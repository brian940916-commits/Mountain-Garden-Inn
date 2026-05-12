import type { I18nText } from '../types/menu'

export const STORE_NAME: I18nText = {
  zh: '山園小棧',
  en: 'Shanyuan Xiaozhan',
  ja: '山園小棧',
  ko: '산원소잔',
}

export const STORE_SUB: I18nText = {
  zh: '一碗白飯  一碗麵',
  en: 'A bowl of rice, a bowl of noodles',
  ja: 'ご飯一杯 麺一杯',
  ko: '밥 한 그릇, 면 한 그릇',
}

export const ADDRESS: I18nText = {
  zh: '545南投縣埔里鎮桃米里桃米路33之1號',
  en: 'No. 33-1, Taomi Rd., Taomi Vil., Puli Twp., Nantou County 545, Taiwan',
  ja: '台湾 南投県 埔里鎮 桃米里 桃米路 33-1号 (545)',
  ko: '대만 난터우현 푸리진 타오미리 타오미로 33-1번지 (545)',
}

export const PHONE: I18nText = {
  zh: '0910-572-658',
  en: '+886 910-572-658',
  ja: '+886 910-572-658',
  ko: '+886 910-572-658',
}

export const HOURS: I18nText = {
  zh: '每日 10:30 – 19:30',
  en: 'Daily 10:30 – 19:30',
  ja: '毎日 10:30 – 19:30',
  ko: '매일 10:30 – 19:30',
}

export const NOTICES: I18nText[] = [
  {
    zh: '櫃台備有辣醬與辣炒蘿蔔乾，可自行取用',
    en: 'Chili sauce & spicy dried radish at the counter — help yourself',
    ja: 'カウンターにチリソースとピリ辛切り干し大根あり、ご自由にどうぞ',
    ko: '카운터에 고추장 소스와 매콤 무말랭이가 있습니다, 자유롭게 이용하세요',
  },
  {
    zh: '外送服務請提前一天預訂',
    en: 'Delivery requires one day advance order',
    ja: '配達は前日までにご予約ください',
    ko: '배달은 하루 전 예약 필요',
  },
  {
    zh: '禁帶外食、禁帶酒',
    en: 'No outside food or alcohol',
    ja: '外部の食べ物・お酒の持ち込み禁止',
    ko: '외부 음식 및 주류 반입 금지',
  },
  {
    zh: '內用每人最低消費 NT$80',
    en: 'Dine-in minimum NT$80 per person',
    ja: '店内飲食はお一人様 NT$80 から',
    ko: '매장 식사 1인 최소 NT$80',
  },
]

export const UI: Record<string, I18nText> = {
  callBtn:   { zh: '撥打電話', en: 'Call',     ja: '電話する', ko: '전화' },
  mapBtn:    { zh: '地圖導航', en: 'Map',      ja: 'マップ',   ko: '지도' },
  hoursBtn:  { zh: '營業時間', en: 'Hours',    ja: '時間',     ko: '시간' },
  announce:  { zh: '店家公告', en: 'Notice',   ja: 'お知らせ', ko: '안내' },
  desc:      { zh: '說明',     en: 'About',    ja: '説明',     ko: '설명' },
  noteLabel: { zh: '備註',     en: 'Note',     ja: '備考',     ko: '비고' },
  market:    { zh: '時價',     en: 'Market Price', ja: '時価', ko: '시가' },
  footer:    { zh: '謝謝光臨 ‧ 一碗白飯一碗麵', en: 'Thank you for visiting', ja: 'ご来店ありがとうございます', ko: '방문해 주셔서 감사합니다' },
  singlePrice: { zh: '單一價格', en: 'Price',  ja: '価格',     ko: '가격' },
}
