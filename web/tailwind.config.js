const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.warmGray,
            green: colors.green,
            red: colors.red,
            blue: colors.blue,
            yellow: colors.yellow,
        },
        fontFamily: {
            serif: ['PT Serif', ...defaultTheme.fontFamily.sans],
            sans: ['Helvetica Neue', ...defaultTheme.fontFamily.serif],
        },
        extend: {
            colors: {
                'accent-1': '#333',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
