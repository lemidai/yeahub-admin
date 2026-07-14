import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',      // Игнорировать аргументы, начинающиеся с _
        varsIgnorePattern: '^_',      // Игнорировать переменные, начинающиеся с _
        caughtErrorsIgnorePattern: '^_', // Игнорировать ошибки в catch
        ignoreRestSiblings: true,     // Игнорировать rest-параметры
      }],
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          printWidth: 80,
          tabWidth: 2,
        }
      ],
    },
  },
])
