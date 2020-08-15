module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
		},
	},
	plugins: ['react', 'react-hooks'],
	'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }],
		'no-var': 'error',
		'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
		'quote-props': ['error', 'as-needed', { keywords: true }],
		'array-callback-return': ['error', { checkForEach: true }],
		'prefer-destructuring': ['warn', { array: true, object: true }, { enforceForRenamedProperties: true }],
		'prefer-template': 'error',
		'template-curly-spacing': ['error', 'never'],
		'no-eval': 'error',
		'wrap-iife': ['error', 'outside', { functionPrototypeMethods: true }],
		'no-loop-func': 'error',
		'prefer-rest-params': 'error',
		'no-new-func': 'error',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-console': [
			'warn',
			{
				allow: ['clear', 'info', 'error', 'dir', 'trace'],
			},
		],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
	},
};
