<template>
  <footer
    class="bg-grey relative inline-flex w-full flex-col gap-16 px-32 pb-40 text-14 !text-blue-dark md:px-64 md:pb-80 xl:px-72 xl:pb-104 2xl:pb-136"
  >
    <ul class="flex flex-wrap gap-x-12 pt-16">
      <li
        v-for="(link, i) in footerLinks"
        :key="link.url"
        :class="{'border-r border-blue-dark/10': i < footerLinks.length - 1}"
      >
        <TheLink
          class="!pr-12 "
          :text="link.label"
          :link="link.url"
        />
      </li>
    </ul>
    <nuxt-link
      to="/"
      class="mt-16 transition-opacity hover:opacity-70 focus:opacity-70"
    >
      <img
        src="/horizontal mono.svg"
        alt="logo"
      >
    </nuxt-link>
    <div class="mt-16 flex flex-col gap-x-48 gap-y-16 !text-blue-dark/50 md:flex-row md:justify-between ">
      <div>
        <p>Copyright 2024</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

const footerLinks = [
  {
    label: 'Fur Handler',
    url: '/haendler'
  },
  {
    label: 'Fur Beginner',
    url: '/beginner'
  },
  {
    label: 'Das Network',
    url: '/network'
  },
  {
    label: 'Uber Uns',
    url: '/ueber-uns'
  },
  {
    label: 'Kontakt',
    url: '/Kontaxt'
  },
  {
    label: 'Wallet',
    url: '/wallet'
  }
]
</script>

<style></style>
