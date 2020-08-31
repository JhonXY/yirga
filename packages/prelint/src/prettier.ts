const defaultPrettier = {
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};

module.exports = defaultPrettier;
export default defaultPrettier;
