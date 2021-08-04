import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";
import alias from "@rollup/plugin-alias";
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss'
import svgr from "@svgr/rollup"
import { terser } from 'rollup-plugin-terser'
import path from "path";

const createPlugin = () => [
	alias({
		entries: {
			"@":path.resolve(__dirname, './src'),
		}
	}),
	resolve({
		extensions: [".ts", ".tsx", ".web.js", ".js"],
		mainFields: ["module", "main"],
	}),
	replace({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
	}),
	babel({
		exclude: "node_modules/**",
		extensions: [".ts", ".tsx", ".web.js", ".js"],
		babelHelpers: 'bundled',
		presets: [
			"@babel/preset-env",
			[
				"@babel/preset-react",
				{
					"flow": false,
					"typescript": true
				}
			],
			"@babel/typescript"
		]
	}),
	image(),
	svgr(),
	json(),
	postcss(),
	commonjs(),
	terser()
]

export default [{
	input: path.resolve(__dirname, 'src/index.ts'),
	output: {
		dir: 'output',
		format: 'umd',
		name: 'plugin'
	},
	external: ['react', 'react-dom', "antd"],
	plugins: createPlugin(),
},
{
	input: path.resolve(__dirname, 'src/index.ts'),
	output: {
		dir: 'output2',
		format: 'umd',
		name: 'plugin'
	},
	external: ['react', 'react-dom', "antd"],
	plugins: createPlugin(),
}
];