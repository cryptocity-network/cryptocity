<template>
  <StructuredText
    v-if="data"
    :render-link-to-record="structuredTextLinkRenderer"
    :render-inline-record="renderInlineRecord"
    :data="data"
  />
</template>

<script lang="ts" setup>
import { StructuredText } from 'vue-datocms'
import type { StructuredTextDocument, RenderInlineRecordContext } from 'vue-datocms'
import structuredTextLinkRenderer from '@/composables/structuredTextLinkRenderer'
defineProps({
  data: {
    type: Object as PropType<StructuredTextDocument>,
    default: null,
    required: true
  }
})
const renderInlineRecord = ({ record }: RenderInlineRecordContext) => {
  const title = record.title
  switch (record.__typename) {
    case 'TeamMemberRecord':
      return h('a', { href: `/team/${record.slug}` })
    default:
      return h('a', { href: '/', innerHTML: title })
  }
}
</script>

<style>

</style>
