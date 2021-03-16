const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
// const logDevServerConfigPlugin = require("./craco-plugin-log-dev-server-config");
// const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')
module.exports = {
    // plugins: [
    //     { plugin: logDevServerConfigPlugin, options: { preText: "Will log the dev server config:" } }
    // ],
    webpack: {
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
