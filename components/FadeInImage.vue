<template>
  <transition appear name="fade">
    <img
      :src="imageUrl"
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
