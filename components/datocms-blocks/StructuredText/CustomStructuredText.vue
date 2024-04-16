<template>
  <StructuredText
    v-if="data"
    :render-link-to-record="structuredTextLinkRenderer"
    :render-inline-record="renderInlineRecord"
    :data="data"
    :render-block="renderBlock"
    :custom-node-rules="customNodeRules"
  />
</template>

<script lang="ts" setup>
import { StructuredText, renderNodeRule } from 'vue-datocms'
import { isCode } from 'datocms-structured-text-utils'

import type { StructuredTextDocument, RenderInlineRecordContext } from 'vue-datocms'
import ImageWithCaption from '~/components/datocms-blocks/StructuredText/ImageWithCaption.vue'
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
const renderBlock = (record: any) => {
  switch (record.record._modelApiKey) {
    case 'image':
      return h(ImageWithCaption, {
        data: record.record
      })
    default:
      return null
  }
}

const customNodeRules = [
  renderNodeRule(isCode, ({ adapter: { renderNode: h }, node }) => {
    return h(
      'pre',
      {},
      [h('code', { class: `language-${node.language}` }, node.code)]
    )
  })
]
</script>

<style>

</style>
