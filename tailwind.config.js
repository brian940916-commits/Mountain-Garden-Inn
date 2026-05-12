/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:      '#1a1614',
        'ink-soft': '#4a3f37',
        muted:    '#8a7d72',
        paper:    '#f6efe1',
        'paper-2': '#ebe2d0',
        'paper-3': '#ddd0b8',
        card:     '#fdfaf2',
        brick:    '#a8332a',
        'brick-dk': '#7a1f18',
        'brick-lt': '#d2725f',
        gold:     '#b5894a',
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', '"Noto Serif JP"', 'serif'],
        sans:  ['"Noto Sans TC"', '"Noto Sans JP"', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
        brush: ['"Zhi Mang Xing"', '"Long Cang"', '"Noto Serif TC"', 'cursive'],
      },
      maxWidth: {
        phone: '375px',
      },
    },
  },
  plugins: [],
}
