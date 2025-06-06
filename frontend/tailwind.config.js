/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // all your source files
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: 'inherit',              // keep inline code color consistent with text
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // subtle background for code
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': { content: 'none' }, // remove opening quote
            'code::after': { content: 'none' },  // remove closing quote
          },
        },
        invert: {
          css: {
            code: {
              color: 'inherit',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
