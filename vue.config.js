
module.exports = {
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@': resolve('src'),
                    '*': resolve(''),
                },
            },
        }
    }
}