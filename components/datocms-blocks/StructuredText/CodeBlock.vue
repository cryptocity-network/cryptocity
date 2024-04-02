<template>
  <pre>
    <code>
        {{ code }}
    </code>
  </pre>
</template>

<script lang="ts" setup>
defineProps({
  code: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: false,
    default: null
  }
})
</script>

<style>

</style>
