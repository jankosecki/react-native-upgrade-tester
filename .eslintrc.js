module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "i18next", "eslint-plugin-import"],
  ignorePatterns: [
    '/report/coverage/**/*'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'prettier/prettier': 'off',
        'quotes': 'off',
        'comma-dangle': 'off',
        'semi': 'off',
        'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
        'no-dupe-class-members': 'off',
        'dot-notation': 'off',
        "import/no-duplicates": "error"
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      excludedFiles: ['src/**/*.test.ts', 'src/**/*.test.tsx', '**/__test__/**/*', '**/__po__/**/*'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: ["plugin:i18next/recommended"],
      rules: {
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/await-thenable': 'error',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error'
      },
    },
  ],
};
