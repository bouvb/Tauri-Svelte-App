/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 120,
	bracketSpacing: true,
	bracketSameLine: true,
	embeddedLanguageFormatting: 'auto',
	semi: true,
	plugins: [require.resolve('prettier-plugin-svelte')],
};
