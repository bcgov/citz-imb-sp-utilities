/*********************************
 * Environment and imports
 *********************************/
const environment = process.env.NODE_ENV || 'development'
const isDev = environment === 'development'
const isProd = environment === 'production'
const autoprefixer = require('autoprefixer')

const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin

/*********************************
 * Entry
 *********************************/
const entry = {
	main: ['./src/index.js'],
}

if (isDev) {
	entry.test = ['./test/app.js']
}

/*********************************
 * Externals
 *********************************/
const externals = {
	//react: 'react'
}

/*********************************
 * Module
 *********************************/
const _module = {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
	],
}

/*********************************
 * Optimization
 *********************************/
const optimization = {
	splitChunks: {
		cacheGroups: {
			react: {
				test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
				name: 'react',
				chunks: 'all',
			},
			commons: {
				test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
				name: 'common',
				chunks: 'all',
			},
		},
	},
}

/*********************************
 * Output
 *********************************/
const output = {
	filename: '[name].bundle.js',
	path: __dirname + '/dist/js/',
	pathinfo: true,
}

if (isProd) {
	output.filename = '[name].bundle.min.js'
	output.pathinfo = false
} else if (isDev) {
	output.publicPath = '/js/'
}

/*********************************
 * Plugins
 *********************************/
const plugins = [
	new webpack.LoaderOptionsPlugin({
		options: {
			postcss: [autoprefixer()],
		},
	}),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		},
	}),
]

if (isProd) {
	plugins.push(new BundleAnalyzerPlugin())
}
if (isDev) {
	plugins.push(new webpack.HotModuleReplacementPlugin())
}

/*********************************
 * Resolve
 *********************************/
const resolve = {
	extensions: ['.js'],
}

/*********************************
 * Exports
 *********************************/
module.exports = {
	entry: entry,
	externals: externals,
	output: output,
	resolve: resolve,
	mode: environment,
	module: _module,
	optimization: optimization,
	plugins: plugins,
}
