const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
// const logDevServerConfigPlugin = require("./craco-plugin-log-dev-server-config");
// const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')
module.exports = {
    plugins: [
        {
            plugin: {
                overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, proxy, allowedHost } }) => {
                    return devServerConfig;
                },
            },
            options: {},
        },
    ],
    webpack: {
        devServer: {
            /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver. */
            compress: true,
            open: false,
            port: 5000,
            // proxy: [{
            //     context: ['/auth', '/api'],
            //     target: apiBaseUrl,
            //     pathRewrite: {
            //         '^/auth': 'auth',
            //         '^/api': 'api'
            //     }
            // }]
        },
        plugins: [
            // 查看打包的进度
            new SimpleProgressWebpackPlugin(),
        ],
    },
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
};
