<template>
  <StructuredText
    v-if="data"
    :render-link-to-record="structuredTextLinkRenderer"
    :data="data"
  />
</template>

<script lang="ts" setup>
import { StructuredText } from 'vue-datocms'
import type { StructuredTextDocument } from 'vue-datocms'
import structuredTextLinkRenderer from '@/composables/structuredTextLinkRenderer'

defineProps({
  data: {
    type: Object as PropType<StructuredTextDocument>,
    default: null,
    required: true
  }
})
</script>

<style>

</style>
