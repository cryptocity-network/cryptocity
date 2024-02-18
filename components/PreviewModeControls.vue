<template>
  <div v-if="isPreviewMode" class="fixed bottom-0 z-[9999] w-screen bg-blue-darker px-16 py-8 text-white" @click="exitPreviewMode">
    Preview mode is active. Click <span class="cursor-pointer underline hover:text-blue-light-on-dark" @click="exitPreviewMode">here</span> to exit
  </div>
</template>

<script lang="ts" setup>
const isPreviewMode = computed(() => {
  return localStorage.getItem('preview')
})

const exitPreviewMode = () => {
  localStorage.removeItem('preview')
  window.location.href = useRoute().path
}

</script>

<style>

</style>
