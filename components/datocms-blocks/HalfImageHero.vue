<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="0"
    :no-padding-bottom="false"
    :overlaps-next-section="true"
    class="half-image-hero !pt-96"
  >
    <div class="!px-16 sm:!px-24  md:!px-48 lg:grid lg:grid-cols-2">
      <div
        class="2lg:px-160 px-16 pb-40 pt-80  sm:px-24 md:max-h-[max(80vh,700px)] lg:!ml-auto lg:max-w-[calc(684px+160px)] lg:p-96 lg:px-72"
      >
        <HeadlineSection
          :label="data.label"
          :headline="data.headline"
          :subline="data.subline"
          :link="data.simpleLink"
          :text-align="'left'"
          :has-link="data.hasLink"
          tag="h1"
        />
      </div>
      <DatoImage
        v-if="data.image"
        :image="data.image"
        :priority="true"
        class="mx-auto aspect-video h-full rounded-8 object-cover lg:aspect-auto lg:max-h-[min(80vh,700px)] xl:w-full"
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
