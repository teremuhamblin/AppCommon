// AppCommon v1.1 — Configuration ESLint

import globals from 'globals';
import js from '@eslint/js';
import mocha from 'eslint-plugin-mocha';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    // Analyse uniquement le code source AppCommon v1.1
    files: [
      'src/core/**/*.js',
      'src/modules/**/*.js',
      'src/ui/**/*.js'
    ],

    plugins: {
      js,
      mocha,
    },

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        AppCommon: true, // Global interne AppCommon v1.1
      },
    },

    extends: ['js/recommended'],

    rules: {
      // Style AppCommon v1.1
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],

      // Qualité du code
      'no-unused-vars': ['warn'],
      'no-console': ['off'], // autorisé pour un template universel
      'no-debugger': ['error'],

      // Modules ES
      'import/no-absolute-path': ['error'],
      'import/no-mutable-exports': ['error'],

      // Cohérence AppCommon
      'no-var': ['error'],
      'prefer-const': ['error'],
    },
  },
]);
