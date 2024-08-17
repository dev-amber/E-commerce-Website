/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wobble: {
          '50%': {
            borderRadius: '250px', // Corrected property name and value
          },
        },
      },
    },
  },
  plugins: [],
};
