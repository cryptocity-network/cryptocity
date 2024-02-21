<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="hero"
  >
    <div>
      <DatoImage
        v-if="data.image"
        :image="data.image"
        class="mx-auto mb-40 !max-h-[5rem] !max-w-[90vw] px-32 sm:px-64 lg:!max-h-[7rem] lg:!max-w-[272px] lg:!px-0"
      />
      <div class="mx-auto max-w-screen-2xl">
        <HeadlineSection
          :label="data.label"
          :headline="data.headline"
          :subline="data.subline"
          :link="data.simpleLink"
          :has-link="data.hasLink"
          tag="h1"
        />
      </div>
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
