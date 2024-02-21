<template>
  <Image v-if="image.responsiveImage" :lazy-load="true" :priority="priority" class="dato-image size-full child:object-contain" :data="(image.responsiveImage as ResponsiveImageType)" />
  <img v-else :src="image.url" :alt="image.alt">
</template>

<script lang="ts" setup>
import { Image, type ResponsiveImageType } from 'vue-datocms'
defineProps({
  image: {
    type: Object,
    default: null
  },
  priority: {
    type: Boolean,
    default: false
  }
})
</script>

<style>
  .dato-image img {
    object-fit: cover;
    object-position: center;
  }
</style>
