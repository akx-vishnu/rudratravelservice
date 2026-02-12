/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rudra: {
                    blue: '#0a192f', // Dark blue as requested
                    lightBlue: '#112240',
                    accent: '#64ffda', // A contrasting accent color (teal/cyan)
                    white: '#e6f1ff',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
