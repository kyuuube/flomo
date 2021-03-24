module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    corePlugins: {
        container: false,
    },
    theme: {
        screens: {
            'desktop': '960px',
            'sm': '375px',
            'md': '960px',
        },
        extend: {
            spacing: {
                aside: '240px',
                main: '720px',
            },
            minHeight: {
                min200: '200px',
            },
        },
    },
    variants: {},
    plugins: [
        ({ addComponents }) => {
            addComponents({
                '.container': {
                    marginInline: 'auto',
                    paddingInline: '0px',
                    maxWidth: '960px',

                    // Breakpoints
                    '@screen sm': {
                        maxWidth: '375px',
                    },
                    '@screen md': {
                        maxWidth: '960px',
                    },
                },
            });
        },
    ],
};
