<template>
  <nuxt-link
    :to="cityLink"
    class="custom-ease group relative aspect-square w-full transform-gpu overflow-hidden  rounded-8 transition-transform hover:-translate-y-12 sm:aspect-[6/9]  lg:aspect-square "
  >
    <FadeInImage
      :image-url="city.mainImage.url"
      class="size-full object-cover opacity-75"
    />
    <div class="absolute left-0 top-0 size-full bg-blue opacity-20 mix-blend-hard-light" />
    <div class="absolute left-0 top-0 size-full bg-gradient-to-t from-blue to-transparent opacity-60 transition-opacity group-hover:opacity-0" />
    <DynamicLogo type="cities" logo-color="#1F2348" text-color="#1F2348" :city-name="city.name" class="absolute left-1/2 top-1/2 w-[215px] -translate-x-1/2 -translate-y-1/2 blur-lg xl:w-[291px]" />
    <DynamicLogo type="cities" logo-color="white" text-color="white" :city-name="city.name" class="absolute left-1/2 top-1/2 w-[215px] -translate-x-1/2 -translate-y-1/2 xl:w-[291px]" />
  </nuxt-link>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '~/store/store'
const store = useWebsiteStore()
const props = defineProps({
  city: {
    type: Object,
    default: null
  }
})
const cityLink = computed(() => {
  return store.getCurrentLocale === useRuntimeConfig().public.DATO_DEFAULT_LOCALE
    ? `/cities/${props.city.name.toLowerCase()}`
    : `/${store.getCurrentLocale}/cities/${props.city.name.toLowerCase()}`
})
</script>

<style scoped>
.custom-ease, .custom-ease * {
  @apply transform-gpu;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 600ms;
}
</style>
