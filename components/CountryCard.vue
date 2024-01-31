<template>
  <ClientOnly>
    <FadeInImage
      :image-url="image.url"
      class="size-full object-cover"
    />
    <div class="absolute left-0 top-0 size-full bg-gradient-to-t from-blue-darker to-transparent transition-opacity group-hover:opacity-0" />
    <div class="absolute left-0 top-0 size-full bg-blue-darker/5 opacity-0 transition-opacity group-hover:opacity-100" />

    <DynamicLogo :custom-url="url" text-color="white" logo-color="white" class="absolute left-1/2 top-1/2 w-4/5 max-w-[300px] -translate-x-1/2 -translate-y-1/2 2xl:max-w-[400px]" />
  </ClientOnly>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: Object,
    default: null
  },
  url: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
