<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="index === 0 ? 136 : 240"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="hero"
  >
    <img
      v-if="data.image"
      :src="data.image.url"
      class="mx-auto mb-40 !max-h-[5rem] !max-w-[90vw] px-32 md:px-64 lg:!max-h-[7rem] lg:!max-w-[272px] lg:!px-0"
      alt=""
    >
    <div class="mx-auto max-w-screen-2xl px-64">
      <HeadlineSection
        :label="data.label"
        :headline="data.headline"
        :subline="data.subline"
        :link="data.link"
        :link-label="data.linkLabel"
      />
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
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
