<template>
  <transition name="fade">
    <img
      v-show="isLoaded"
      :src="imageUrl"
      @load="loaded = true"
    >
  </transition>
</template>

<script lang="ts" setup>
defineProps({
  imageUrl: {
    type: String,
    default: null
  }
})
const loaded = ref(false)
const isLoaded = computed(() => {
  return loaded.value
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
