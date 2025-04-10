import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          500: '#BAF351',
        }
      }
    }
  },
  plugins: [],
}

export default config