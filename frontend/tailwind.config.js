/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'custom-light': '0px 4px 4px 0px rgba(0, 0, 0, 0.05)',
                'little-light': '0px 4px 4px 0px rgba(0, 0, 0, 0.08)',
            },
        },
    },
    plugins: [],
};
