module.exports = {
    theme: {
        fontFamily: {
            sans: [ 'Poppinns', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', '"Roboto"', 'system-ui', 'sans-serif' ],
            header: [ '"Poppinns"', '"Poppinns"', 'system-ui', 'sans-serif' ],
            mono: [ '"Poppinns"', '"Source Code Pro"', 'SourceCodePro', 'Menlo', 'Monaco', 'Consolas', 'monospace' ],
        },
        colors: {
            transparent: 'transparent',
            black: 'hsl(210, 27%, 10%)',
            white: '#ffffff',
            primary: {
                50: 'hsl(202, 100%, 95%)', // lightest
                100: 'hsl(204, 100%, 86%)', // lighter
                200: 'hsl(206, 93%, 73%)',
                300: 'hsl(208, 88%, 62%)',
                400: 'hsl(210, 83%, 53%)', // light
                500: 'hsl(212, 92%, 43%)', // base
                600: 'hsl(214, 95%, 36%)', // dark
                700: 'hsl(215, 96%, 32%)',
                800: 'hsl(216, 98%, 25%)', // darker
                900: 'hsl(218, 100%, 17%)', // darkest
            },
            neutral: {
                50: 'hsl(216, 33%, 97%)',
                100: 'hsl(214, 15%, 91%)',
                200: 'hsl(210, 16%, 82%)',
                300: '#00000', // Text Color
                400: '#00000', // Text Color
                500: '#00000', // Text Color
                600: 'hsl(209, 14%, 37%)',
                700: '#08072b', // Seconday Background Color
                800: '#13193d', // Background color
                900: '#09142e', // Main Navigation Color
                905: '#091330', // Secondary Navigation Color
                910: '#08072b', // Hover / Selected Color
            },
            red: {
                50: 'hsl(360, 100%, 95%)',
                100: 'hsl(360, 100%, 87%)',
                200: 'hsl(360, 100%, 80%)',
                300: 'hsl(360, 91%, 69%)',
                400: 'hsl(360, 83%, 62%)',
                500: 'hsl(356, 75%, 53%)',
                600: 'hsl(354, 85%, 44%)',
                700: 'hsl(352, 90%, 35%)',
                800: 'hsl(350, 94%, 28%)',
                900: 'hsl(348, 94%, 20%)',
                910: '#ff0307', // Server Stopped Color
            },
            yellow: {
                50: 'hsl(49, 100%, 96%)',
                100: 'hsl(48, 100%, 88%)',
                200: 'hsl(48, 95%, 76%)',
                300: 'hsl(48, 94%, 68%)',
                400: 'hsl(44, 92%, 63%)',
                500: 'hsl(42, 87%, 55%)',
                600: 'hsl(36, 77%, 49%)',
                700: 'hsl(29, 80%, 44%)',
                800: 'hsl(22, 82%, 39%)',
                900: 'hsl(15, 86%, 30%)',
                910: '#f4ff20', // Server Starting Color
            },
            cyan: {
                50: 'hsl(171, 82%, 94%)',
                100: 'hsl(172, 97%, 88%)',
                200: 'hsl(174, 96%, 78%)',
                300: 'hsl(176, 87%, 67%)',
                400: 'hsl(178, 78%, 57%)',
                500: 'hsl(180, 77%, 47%)',
                600: 'hsl(182, 85%, 39%)',
                700: '#7289DA', // Accent Color
                710: '#AAB8E8', // Accent Color on Hover
                800: 'hsl(186, 91%, 29%)',
                900: 'hsl(188, 91%, 23%)',
            },
            green: {
                50: 'hsl(125, 65%, 93%)',
                100: 'hsl(127, 65%, 85%)',
                200: 'hsl(124, 63%, 74%)',
                300: 'hsl(123, 53%, 55%)',
                400: 'hsl(123, 57%, 45%)',
                500: 'hsl(122, 73%, 35%)',
                600: 'hsl(122, 80%, 29%)',
                700: 'hsl(125, 79%, 26%)',
                800: 'hsl(125, 86%, 20%)',
                900: 'hsl(125, 97%, 14%)',
                910: '#2bbf26', // Server Online Color
            },
        },
        extend: {
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
};
