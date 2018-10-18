const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development', //development면 개발용, production이면 배포용 (배포용일 경우에는 알아서 최적화가 적용)
	entry: {
		app: ['a.js', 'b.js'],
	},
	output: {
		path: '/dist',
		filename: '[name].js',
		publicPath: '/',
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			options: {
				presets: [
					[
						'@babel/preset-env', {
						targets: { node: 'current' }, // 노드일 경우만
						modules: 'false'
					}
					],
					'@babel/preset-react',
					'@babel/preset-stage-0'
				],
			},
			exclude: ['/node_modules'],
		},{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			}),
		}],
	},
	plugins: [
		// 기타 플러그인
		new ExtractTextPlugin({
			filename: 'app.css',
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'), // 아래 EnvironmentPlugin처럼 할 수도 있습니다.
		}),
		new webpack.EnvironmentPlugin(['NODE_ENV']), // 요즘은 위의 DefinePlugin보다 이렇게 하는 추세입니다.
	],
	optimization: {
		minimize: true, //true/false
		splitChunks: {},
		concatenateModules: true,
	},
	resolve: { //웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션
		modules: ['node_modules'], //node_modules를 넣으셔야 디렉토리의 node_modules를 인식할 수 있습니다
		extensions: ['.js', '.json', '.jsx', '.css'], //extensions에 넣은 확장자들은 웹팩에서 알아서 처리해주기 때문에 파일에 저 확장자들을 입력할 필요가 없어집니다.
	},
};