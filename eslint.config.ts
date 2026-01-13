// eslint.config.ts
import js from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.astro/',
      '.github/',
      '.changeset/',
      // generated types; no need to lint them
      '.astro/types.d.ts'
    ]
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...vue.configs['flat/recommended'],

  // Vue SFC parsing (with TS support)
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      }
    }
  },

  // ✅ Astro env.d.ts uses triple-slash refs by design
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  },

  // OPTIONAL: if you prefer not to touch vendor snippets in inline scripts
  // (Otherwise, rewrite gtag() to use ...args and you don't need this)
  {
    files: ['**/*.astro'],
    rules: {
      // you can keep it on if you rewrite gtag() to (...args)
      // "prefer-rest-params": "off",
    }
  }
]
