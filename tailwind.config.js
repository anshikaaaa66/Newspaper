// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This is correct if your source files are in the `src` folder
  ],
  theme: {
    extend: {
      // Add any custom theme extensions here
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here
  ],
}
