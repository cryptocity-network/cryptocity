<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="0"
    :no-padding-bottom="false"
    :overlaps-next-section="true"
    class="!pt-96"
  >
    <div class="!px-16 sm:!px-24 xl:grid xl:grid-cols-2">
      <div
        class="px-16 pb-40 pt-80 sm:px-24  lg:!ml-auto lg:px-72 lg:py-96 xl:max-h-[max(80vh,700px)] xl:max-w-[calc(684px+160px)] xl:px-96 2xl:px-160"
      >
        <HeadlineSection
          :label="data.label"
          :headline="data.headline"
          :subline="data.subline"
          :link="data.link"
          :link-label="data.linkLabel"
          :text-align="'left'"
        />
      </div>
      <img
        v-if="data.image"
        :src="data.image.url"
        :alt="data.image.alt"
        class="mx-auto h-full rounded-8 object-cover xl:max-h-[max(80vh,700px)]"
      >
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
