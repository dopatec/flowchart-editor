/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#ec4899',
            'primary-hover': '#db2777',
            background: '#0f172a',
            surface: '#1e293b',
            text: '#f8fafc',
            'text-secondary': '#94a3b8',
            accent: '#9333ea',
          },
        },
      },
      plugins: [],
    }
