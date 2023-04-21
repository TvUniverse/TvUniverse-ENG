const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '425px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
    },
    extend: {
      screens: {
        'md+': '928px',
        lgc: '1024px',
        xlc: '1280px',
        '2xlc': '1536px',
        '3xlc': '1848px',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
}
