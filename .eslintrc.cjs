module.exports = {
  extends: ['standard', 'plugin:astro/recommended'],
  rules: {
    'no-tabs': 'off',
    indent: 'off',
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'no-tabs': 'off',
        indent: 'off',
        'space-before-function-paren': 'off'
      }
    },
    {
      files: ['.tsx'],
      extends: ['plugin:react/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      plugins: ['@typescript-eslint', 'react'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error'
      }
    }
  ]
}
