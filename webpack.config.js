const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['./src/index.js','./src/app.sass']
    },
    output: {
        path: './build',
        filename: 'bundle.js',
        //publicPath: './build/'
    },
    resolve: {
        extensions: ['','.js','.sass']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    
    plugins: [new HtmlWebpackPlugin({
        favicon: './favicon.ico',
        title: 'Brop'
    })],
    
    module: {
        loaders: [
            {
                test: /(\.js|.jsx)$/,
                loader: 'babel',
                exclude: '/node_modules',
                query: {
                    presets: ['es2015']
                }
            },
            
            {
                test: /\.sass$/,
                loader: "style!css!sass?indentedSyntax=sass"
            }
        ]
    }
}