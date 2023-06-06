import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                display: ['staatliches', ...defaultTheme.fontFamily.sans],
                new: ['Questrial', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'turquoise': 'rgb(79, 209, 197)',
                'deepgreen': 'rgba(9,114,102,255)',
                'cleomagenta': 'rgb(219,65,99)',
                'offblack': 'rgb(71,78,100)',
                'colman': 'rgb(215,163,53)',
                'github': '#6e5494',
                'linkedIn': '#0072b1',
                'neongreen': '#00FF00',
                'neonred': '#FD1C03',
                'neonpurple': '#CC00FF',
                'darkpurple': '#6E0DD0',
                'neonblue': '#0062FF'
            },
            height: {
                "01": "5px",
            },
            minHeight: {
                'title': '110px',
            },
            width: {
                "w-50-rem": "50rem",
            },
            fontSize: {
                "headline": "100px",
                "display": "80px",
                "mobile-display": "60px",
            },
            inset: {
                '1/10': '10%'
            },
            lineHeight: {
                "leading-20": "4.5rem",
            },
        },
    },

    plugins: [forms],
};
