/** @type {import('tailwindcss').Config} */
// Marca "Costanera" — los valores salen del manual de marca (tokens.json).
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rio: '#1D4E89',          // color principal de marca
        atardecer: '#F26A3D',    // acción: CTA, el ".dev", resaltados
        sol: '#F4B942',          // detalle cálido, solo en grande sobre río
        arena: {
          DEFAULT: '#F6EFE3',    // fondo de página
          200: '#E7DCC8',        // superficie secundaria
        },
        noche: {
          DEFAULT: '#16243A',    // texto principal / placas oscuras
          suave: '#4B5A70',      // texto secundario sobre arena
          claro: '#B8C2D1',      // texto secundario sobre noche
        },

        // Alias semánticos
        background: '#F6EFE3',
        foreground: '#16243A',
        primary: {
          DEFAULT: '#1D4E89',
          hover: '#16243A',
        },
        border: 'rgba(22, 36, 58, 0.14)',
        card: '#E7DCC8',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Trebuchet MS"', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        mark: '30px',
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}
