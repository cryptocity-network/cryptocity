<template>
  <footer
    class="relative inline-flex w-full flex-col gap-16 bg-gray px-32 pb-40 text-14 !text-blue-dark md:px-64 md:pb-80 xl:px-72 xl:pb-104 2xl:pb-136"
  >
    <nuxt-link
      to="/"
      class="my-32 transition-opacity hover:opacity-70 focus:opacity-70"
    >
      <img
        src="/horizontal-mono.svg"
        alt="logo"
      >
    </nuxt-link>
    <div class="flex flex-col gap-8 text-blue-dark opacity-60">
      <h5 class="font-bold uppercase">
        ⚠ {{ data.footer.title }} ⚠
      </h5>
      <a href="">Detailed Disclaimer</a>
      <div v-html="marked.parse(data.footer.legal)" />
      <a href="">Data</a>
      <a href="">Cookies</a>
      <p>{{ data.footer.copyrightText }}</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>

import { marked } from 'marked'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import footer from '../graphql/Footer'
import { useWebsiteStore } from '../store/store'

const store = useWebsiteStore()
const footerQuery = footer(store.getCurrentLocale)
const { data, error } = await useGraphqlQuery({ query: footerQuery })

</script>

<style></style>
