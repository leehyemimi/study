const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development', //development�� ���߿�, production�̸� ������ (�������� ��쿡�� �˾Ƽ� ����ȭ�� ����)
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
						targets: { node: 'current' }, // ����� ��츸
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
		// ��Ÿ �÷�����
		new ExtractTextPlugin({
			filename: 'app.css',
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'), // �Ʒ� EnvironmentPluginó�� �� ���� �ֽ��ϴ�.
		}),
		new webpack.EnvironmentPlugin(['NODE_ENV']), // ������ ���� DefinePlugin���� �̷��� �ϴ� �߼��Դϴ�.
	],
	optimization: {
		minimize: true, //true/false
		splitChunks: {},
		concatenateModules: true,
	},
	resolve: { //������ �˾Ƽ� ��γ� Ȯ���ڸ� ó���� �� �ְ� �����ִ� �ɼ�
		modules: ['node_modules'], //node_modules�� �����ž� ���丮�� node_modules�� �ν��� �� �ֽ��ϴ�
		extensions: ['.js', '.json', '.jsx', '.css'], //extensions�� ���� Ȯ���ڵ��� ���ѿ��� �˾Ƽ� ó�����ֱ� ������ ���Ͽ� �� Ȯ���ڵ��� �Է��� �ʿ䰡 �������ϴ�.
	},
};