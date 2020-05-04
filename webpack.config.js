/*********************************
 * Environment and imports
 *********************************/
const environment = process.env.NODE_ENV || 'development'
const isDev = environment === 'development'
const isProd = environment === 'production'
const autoprefixer = require('autoprefixer')

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin

/*********************************
 * Entry
 *********************************/
const entry = {
	main: ['./src/index.js'],
}

/*********************************
 * Module
 *********************************/
const _module = {
	rules: [
		{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['@babel/preset-env'],
			},
		},
		{
			test: /\.css$/i,
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
	new ExtractTextPlugin({
		filename:
			environment === 'production'
				? '../css/[name].bundle.min.css'
				: '../css/[name].bundle.css',
		disable: false,
		allChunks: false,
	}),
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

/*********************************
 * Resolve
 *********************************/
const resolve = {
	extensions: ['.ts', '.js'],
}

/*********************************
 * Exports
 *********************************/
module.exports = {
	entry: entry,
	output: output,
	resolve: resolve,
	mode: environment,
	module: _module,
	optimization: optimization,
	plugins: plugins,
}
