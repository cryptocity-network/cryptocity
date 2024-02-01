module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    'vue/no-v-html': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/multi-word-names': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-arbitrary-value': 'off'
  }
}
