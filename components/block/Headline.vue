<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="index === 0 ? 136 : 240"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    :class="{'title': index !== 0}"
  >
    <div class="mx-auto max-w-screen-2xl px-64">
      <HeadlineSection
        :label="data.label"
        :headline="data.headline"
        :subline="data.subline"
        :link="data.simpleLink"
        :has-link="data.hasLink"
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
