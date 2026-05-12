// ═══════════════════════════════════════════════════════════════════════════
//  山園小棧 — 菜單原始資料(餐廳業者編輯處)
//
//  欄位:
//    category  分類代碼
//    name      品項中文名稱
//    options   價格選項
//    tags      標記代碼(僅菜單明確標示者)
//    image     圖片檔名(images/) 或 null
//    emoji     無圖時的替代圖示
//    note      中文備註(可用分號分隔多條)
// ═══════════════════════════════════════════════════════════════════════════

window.menuRaw = [
  // ── 便當 ─────────────────────────────────────
  { category: 'bento', name: '炸G排飯',       options: ['100'], tags: ['R'],     image: 'fried-chicken-g.png',   emoji: '🍗', note: '帶骨' },
  { category: 'bento', name: '炸雞腿飯',     options: ['100'], tags: ['R'],     image: 'fried-chicken-leg.png', emoji: '🍗', note: '' },
  { category: 'bento', name: '滷雞腿飯',     options: ['100'], tags: [],         image: null, emoji: '🍗', note: '' },
  { category: 'bento', name: '炸無骨雞排飯', options: ['100'], tags: [],         image: null, emoji: '🍗', note: '' },
  { category: 'bento', name: '梅干扣肉飯',   options: ['75'],  tags: [],         image: null, emoji: '🍚', note: '1碗裝' },

  // ── 組合套餐 ─────────────────────────────────
  { category: 'combo', name: '鮭魚炒飯 + 炸雞腿',         options: ['170'], tags: ['R'], image: null, emoji: '🍱', note: '組合價' },
  { category: 'combo', name: '鹹豬肉炒飯 + 炸G排',       options: ['170'], tags: ['R'], image: null, emoji: '🍱', note: '組合價' },
  { category: 'combo', name: '牛肉炒飯 + 炸雞腿',         options: ['170'], tags: [],     image: null, emoji: '🍱', note: '組合價' },
  { category: 'combo', name: '香腸炒飯 + 炸雞腿',         options: ['160'], tags: [],     image: null, emoji: '🍱', note: '組合價' },
  { category: 'combo', name: '蝦仁炒飯 + 炸無骨雞排',     options: ['160'], tags: [],     image: null, emoji: '🍱', note: '組合價' },
  { category: 'combo', name: '炒飯 + 炸G排',               options: ['140'], tags: [],     image: null, emoji: '🍱', note: '優惠價' },
  { category: 'combo', name: '炒飯 + 炸雞腿',             options: ['140'], tags: [],     image: null, emoji: '🍱', note: '優惠價' },
  { category: 'combo', name: '炒飯 + 滷雞腿',             options: ['140'], tags: [],     image: null, emoji: '🍱', note: '優惠價' },
  { category: 'combo', name: '炒飯 + 豬排',                 options: ['140'], tags: [],     image: null, emoji: '🍱', note: '優惠價' },
  { category: 'combo', name: '炒飯 + 炸無骨雞排',         options: ['130'], tags: [],     image: null, emoji: '🍱', note: '優惠價' },

  // ── 炒飯 ─────────────────────────────────────
  { category: 'fried_rice', name: '綜合炒飯',         options: ['110'], tags: [],          image: null, emoji: '🍚', note: '蝦仁 + 豬肉 + 魷魚 + 香腸' },
  { category: 'fried_rice', name: '沙茶羊肉炒飯',     options: ['100'], tags: [],          image: null, emoji: '🍚', note: '' },
  { category: 'fried_rice', name: '沙茶牛肉炒飯',     options: ['100'], tags: [],          image: null, emoji: '🍚', note: '' },
  { category: 'fried_rice', name: '沙茶豬肉炒飯',     options: ['100'], tags: [],          image: null, emoji: '🍚', note: '' },
  { category: 'fried_rice', name: '泡菜牛肉炒飯',     options: ['100'], tags: ['1'],       image: null, emoji: '🍚', note: '小辣' },
  { category: 'fried_rice', name: '泡菜豬肉炒飯',     options: ['100'], tags: ['1'],       image: null, emoji: '🍚', note: '小辣' },
  { category: 'fried_rice', name: '皮蛋豬肉炒飯',     options: ['100'], tags: [],          image: null, emoji: '🍚', note: '' },

  // ── 炒麵 ─────────────────────────────────────
  { category: 'noodle', name: '綜合炒麵',         options: ['110'], tags: [],     image: null, emoji: '🍜', note: '' },
  { category: 'noodle', name: '沙茶羊肉炒麵',     options: ['110'], tags: [],     image: null, emoji: '🍜', note: '' },
  { category: 'noodle', name: '沙茶牛肉炒麵',     options: ['110'], tags: [],     image: null, emoji: '🍜', note: '' },
  { category: 'noodle', name: '泡菜牛肉炒麵',     options: ['110'], tags: ['1'],  image: null, emoji: '🍜', note: '小辣' },
  { category: 'noodle', name: '泡菜豬肉炒麵',     options: ['110'], tags: ['1'],  image: null, emoji: '🍜', note: '小辣' },
  { category: 'noodle', name: '羊肉炒麵',         options: ['100'], tags: [],     image: null, emoji: '🍜', note: '' },
  { category: 'noodle', name: '牛肉炒麵',         options: ['100'], tags: [],     image: null, emoji: '🍜', note: '' },
  { category: 'noodle', name: '豬肉炒麵',         options: ['100'], tags: [],     image: null, emoji: '🍜', note: '' },

  // ── 湯麵 ─────────────────────────────────────
  { category: 'soup_noodle', name: '牛肉湯麵',          options: ['140'], tags: [], image: null, emoji: '🍲', note: '有肉' },
  { category: 'soup_noodle', name: '麻油雞湯麵',        options: ['140'], tags: [], image: null, emoji: '🍲', note: '' },
  { category: 'soup_noodle', name: '味噌豬肉海鮮湯麵',  options: ['140'], tags: [], image: null, emoji: '🍲', note: '' },

  // ── 青菜 ─────────────────────────────────────
  { category: 'veggie', name: '高麗菜', options: ['150'], tags: [], image: null, emoji: '🥬', note: '1盤' },
  { category: 'veggie', name: '炒青菜', options: ['170'], tags: [], image: null, emoji: '🥬', note: '1盤;山苘蒿、龍鬚菜、萵苣' },

  // ── 單點 ─────────────────────────────────────
  { category: 'side', name: '滷蛋',           options: ['25'],  tags: [], image: null, emoji: '🥚',  note: '1顆' },
  { category: 'side', name: '荷包蛋',         options: ['25'],  tags: [], image: null, emoji: '🍳',  note: '1顆' },
  { category: 'side', name: '海帶',           options: ['35'],  tags: [], image: null, emoji: '🌿',  note: '1份' },
  { category: 'side', name: '豆干',           options: ['35'],  tags: [], image: null, emoji: '🟫',  note: '1份' },
  { category: 'side', name: '綜合湯',         options: ['50'],  tags: [], image: null, emoji: '🍵',  note: '1碗' },
  { category: 'side', name: '雞肉捲',         options: ['55'],  tags: [], image: null, emoji: '🍗',  note: '1份' },
  { category: 'side', name: '涼拌椒香木耳',   options: ['70'],  tags: [], image: null, emoji: '🌿',  note: '' },
  { category: 'side', name: '炸菇',           options: ['100'], tags: [], image: null, emoji: '🍄',  note: '1份' },
  { category: 'side', name: '炸豆腐',         options: ['100'], tags: [], image: null, emoji: '🟫',  note: '1份' },

  // ── 招牌商品 ─────────────────────────────────
  { category: 'specialty', name: '雞爪凍',       options: ['45'],  tags: ['R'],      image: null, emoji: '🍖', note: '1盒' },
  { category: 'specialty', name: '辣炒蘿蔔乾',   options: ['100'], tags: ['R'],      image: null, emoji: '🫙', note: '1罐;可配飯麵、水餃、拌菜、蘿蔔糕等' },
  { category: 'specialty', name: '豆豉魚乾',     options: ['120'], tags: ['R'],      image: null, emoji: '🫙', note: '1罐;不辣;可配飯麵、水餃、蘿蔔糕等' },
  { category: 'specialty', name: '辣醬',         options: ['150'], tags: ['R'],      image: null, emoji: '🫙', note: '拌飯麵、水餃、蘿蔔糕等' },
  { category: 'specialty', name: '泡菜',         options: ['150'], tags: ['R', '1'], image: null, emoji: '🫙', note: '1罐;小辣' },
];
