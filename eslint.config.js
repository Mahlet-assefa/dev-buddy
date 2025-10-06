// eslint.config.js
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
	{
		ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
	},
]);

