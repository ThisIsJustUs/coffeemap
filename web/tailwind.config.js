const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
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
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
