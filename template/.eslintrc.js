module.exports = {
	root: true,
	extends: ["react-native-wcandillon", "prettier"],
	rules: {
		"no-undef": "off",
		"react/jsx-indent": ["warn", "tab"],
		"react/jsx-indent-props": ["warn", "tab"],
		"@typescript-eslint/no-use-before-define": "off",
		"no-plusplus": "off",
		"react-native/no-unused-styles": "warn",
	},
};
