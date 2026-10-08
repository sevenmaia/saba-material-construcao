/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FFE600', // Amarelo principal Sabá
          hover: '#F4D900',
          dark: '#E5CF00',
        },
        ink: {
          DEFAULT: '#111214', // Preto principal
          soft: '#232428',
          card: '#1A1B1E',
        },
        charcoal: '#34363B',
        paper: '#FFFFFF',
        surface: {
          DEFAULT: '#F5F5F2',
          alt: '#ECEDEA',
          border: '#DDDEDA',
        },
        whatsapp: {
          DEFAULT: '#0CBF54',
          hover: '#099E46',
          dark: '#08833A',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'none': '0',
        'xs': '3px',
        'sm': '5px',
        'btn': '8px',
        'btn-mobile': '6px',
        'card': '8px',
        'card-mobile': '6px',
        'panel': '10px',
        'panel-mobile': '8px',
        'full': '9999px',
      },
      maxWidth: {
        'lp': '1248px',
        'bio': '560px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 28s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
