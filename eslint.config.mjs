import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'

export default defineConfig([
  globalIgnores(['dist', '.storybook', 'fractal.config.js, src/**/*.config.js']),
  // Base config for JavaScript, TypeScript, and Vue files
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },

  // Adding global definitions for the browser
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: globals.browser } },

  // JavaScript linting rules
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },

  // TypeScript linting rules
  tseslint.configs.recommended,

  // Vue linting rules
  pluginVue.configs['flat/essential'],

  eslintPluginPrettier,

  // Additional configuration for Vue files to use TypeScript parser
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },

  {
    plugins: {
      'unused-imports': eslintPluginUnusedImports
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off' // Disables the rule
    }
  },
  {
    rules: {
      'no-undef': 'off'
    }
  }
])
