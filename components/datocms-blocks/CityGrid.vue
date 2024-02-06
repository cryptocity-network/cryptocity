<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <ul class=" grid grid-cols-1 gap-32 lg:grid-cols-2">
      <li
        v-for="(item, i) in data.items"
        :key="`item-${i}`"
        class="flex flex-col gap-12 rounded-8 bg-white p-32 shadow lg:p-40 xl:p-48"
      >
        <h3 :field="item.headline" :background-color="item.backgroundColor">
          {{ item.title }}
        </h3>
        <img v-if="item.image" :src="item.image.url" class=" rounded-8 border border-blue-dark/20">
        <StructuredText class="flex-1" :data="item.description" />
        <TheLink
          v-if="item.hasLink"
          :text="item.simpleLink.label"
          :link="item.simpleLink.internalLink"
          :url="item.simpleLink.url"
          :is-external="item.simpleLink.isExternalLink"
          variant="info"
        />
      </li>
    </ul>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import { StructuredText } from 'vue-datocms'
defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})
</script>
