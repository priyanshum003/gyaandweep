module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'warn', // Show unused variables as warnings
    '@typescript-eslint/no-unused-vars': 'warn', // Show unused variables in TypeScript as warnings
    '@typescript-eslint/no-unused-vars-experimental': 'warn', // Show unused variables in TypeScript as warnings (experimental)
  },
}
