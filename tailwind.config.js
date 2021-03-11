module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    corePlugins: {
        container: false,
    },
    theme: {
      extend: {
        spacing: {
          'aside': '240px',
          'main': '720px',
        }
      },
    },
    variants: {
    },
    plugins: [
        ({ addComponents }) => {
            addComponents({
                '.container': {
                    marginInline: 'auto',
                    paddingInline: '0px',
                    maxWidth: '960px',

                    // Breakpoints
                    '@screen sm': {
                        maxWidth: '960px',
                    },
                    '@screen md': {
                        maxWidth: '960px',
                    },
                },
            });
        },
    ],
};
