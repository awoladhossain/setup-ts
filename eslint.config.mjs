import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Your common rules
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'no-undef': 'error',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      // JavaScript specific rules
      eqeqeq: 'off',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
);
