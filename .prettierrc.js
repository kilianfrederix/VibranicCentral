module.exports = {
  endOfLine: 'auto',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  tabWidth: 2,
  overrides: [
    {
      files: 'src/i18n/locales/*.ts',
      options: {
        printWidth: 999,
        maxLineLength: 999,
      },
    },
  ],
};
