module.exports = {
	env: {
		browser: true,
		es2020: true,
		greasemonkey: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended', // Displays Prettier errors as ESLint errors. **Make sure this is always the last configuration.**
	],
	rules: {
		quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
	},
};
