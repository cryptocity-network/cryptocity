<template>
  <ClientOnly>
    <FadeInImage
      :image-url="image.url"
      class="size-full object-cover"
    />
    <div class="absolute left-0 top-0 size-full bg-gradient-to-t from-blue-darker to-transparent transition-opacity group-hover:opacity-0" />
    <div class="absolute left-0 top-0 size-full bg-blue-darker/5 opacity-0 transition-opacity group-hover:opacity-100" />

    <FadeInImage
      :image-url="logo.url"
      class="absolute left-1/2 top-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2"
    />
    <!-- <transition name="fade">
            <img
              v-show="loaded"
              :src="logo.url"
              @load="onLoaded"
            >
          </transition> -->
  </ClientOnly>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: Object,
    default: null
  },
  logo: {
    type: Object,
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
