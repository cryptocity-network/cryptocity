<template>
  <div>
    <component
      :is="componentName.replace(/(^|_)./g, s => s.slice(-1).toUpperCase())"
      v-if="componentName"
      :data="data"
    />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  componentName: {
    type: String,
    default: null
  },
  data: {
    type: Object,
    default: null
  }
})
</script>
