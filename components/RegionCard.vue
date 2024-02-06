<template>
  <nuxt-link
    class="custom-ease group relative block aspect-[3/4] h-full min-h-full overflow-hidden rounded-8 transition-transform hover:-translate-y-16 xl:aspect-[3/4]"
    :to="region.url"
  >
    <FadeInImage
      :image-url="region.mainImage.url"
      class="size-full object-cover opacity-75"
    />
    <div class="absolute left-0 top-0 size-full bg-blue opacity-20 mix-blend-hard-light" />
    <div class="absolute left-0 top-0 size-full bg-gradient-to-t from-blue to-transparent opacity-60 transition-opacity group-hover:opacity-0" />

    <DynamicLogo
      :brand-name="region.brandName"
      text-color="white"
      logo-color="white"
      class="absolute left-1/2 top-1/2 h-56 -translate-x-1/2 -translate-y-1/2 xl:h-72"
    />
  </nuxt-link>
</template>

<script lang="ts" setup>
defineProps({
  region: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
.custom-ease, .custom-ease * {
  @apply transform-gpu;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 600ms;
}
</style>
