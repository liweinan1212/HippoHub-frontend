
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: false,
    devServer: {
        open: true,
        host: "localhost",
        port: '8081',
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                pathRewrite: {
                    '^api': ''
                }
            }
        },
    }
}  