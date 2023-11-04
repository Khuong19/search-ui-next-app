/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        '3xl': '0 0 0 0.25rem rgba(13, 110, 253, .25)',
      },
      colors: {
        'focus-blue': 'rgba(13, 110, 253, .25)',
        'input-blue': '#0d6efd',
        'light-gray':'#6c757d',
        'light-blue':'#cff4fc'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
