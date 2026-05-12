import type { TagDef } from '../types/menu'

export const TAGS: Record<string, TagDef> = {
  R:   { icon: '★',  zh: '本店推薦', en: 'Recommended',          ja: 'おすすめ',         ko: '추천' },
  '1': { icon: '🌶', zh: '小辣',     en: 'Mild Spicy',           ja: '少し辛い',         ko: '약간 매움' },
  '2': { icon: '🌶', zh: '中辣',     en: 'Medium Spicy',         ja: '中辛',             ko: '보통 매움' },
  '3': { icon: '🔥', zh: '大辣',     en: 'Very Spicy',           ja: '激辛',             ko: '매우 매움' },
  P:   { icon: '🐷', zh: '含豬肉',   en: 'Contains Pork',        ja: '豚肉入り',         ko: '돼지고기 포함' },
  B:   { icon: '🐂', zh: '含牛肉',   en: 'Contains Beef',        ja: '牛肉入り',         ko: '소고기 포함' },
  L:   { icon: '🐑', zh: '含羊肉',   en: 'Contains Lamb',        ja: 'ラム入り',         ko: '양고기 포함' },
  V:   { icon: '🥬', zh: '素食',     en: 'Vegetarian',           ja: 'ベジタリアン',     ko: '채식' },
  V5:  { icon: '🧄', zh: '五辛素',   en: 'Plant-based w/ Allium',ja: '五葷あり精進',     ko: '오신채 포함 채식' },
  H:   { icon: '☪',  zh: '清真認證', en: 'Halal Certified',      ja: 'ハラール認証',     ko: '할랄 인증' },
}

export const CATEGORY_ORDER = [
  'bento', 'combo', 'fried_rice', 'noodle', 'soup_noodle', 'veggie', 'side', 'specialty',
]

export const CATEGORIES: Record<string, Record<string, string>> = {
  bento:       { zh: '便當',     en: 'Bento',           ja: '弁当',       ko: '도시락' },
  combo:       { zh: '組合套餐', en: 'Combo Sets',      ja: 'コンボ',     ko: '콤보 세트' },
  fried_rice:  { zh: '炒飯',     en: 'Fried Rice',      ja: '炒飯',       ko: '볶음밥' },
  noodle:      { zh: '炒麵',     en: 'Stir-fry Noodle', ja: '焼きそば',   ko: '볶음면' },
  soup_noodle: { zh: '湯麵',     en: 'Noodle Soup',     ja: '麺スープ',   ko: '국수' },
  veggie:      { zh: '青菜',     en: 'Vegetables',      ja: '野菜',       ko: '채소' },
  side:        { zh: '單點',     en: 'À la Carte',      ja: '一品料理',   ko: '단품' },
  specialty:   { zh: '招牌商品', en: 'Signature',       ja: '看板商品',   ko: '시그니처' },
}
