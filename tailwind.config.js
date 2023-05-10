const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    1: colors.teal["400"],
                    2: colors.teal["600"],
                    3: colors.teal["800"],
                    text: colors.gray["900"]
                },
                secondary: {
                    1: colors.zinc["50"],
                    2: colors.zinc["300"],
                    3: colors.zinc["500"],
                    text: colors.gray["500"]
                },
            }
        },
    },
    plugins: [],
}

