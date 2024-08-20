<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div v-if="partners" class="relative flex flex-col gap-x-40 px-40 sm:items-center sm:justify-center">
      <div class="max-w-screen-2xl pb-40 md:mx-auto md:px-64">
        <HeadlineSection
          :label="data.headline.label"
          :headline="data.headline.headline"
          :subline="data.headline.subline"
        />
      </div>
      <div class="mb-40 inline-flex flex-wrap items-center gap-40 overflow-hidden sm:justify-center">
        <div v-for="(partner, i) in partners" :key="i" class="relative flex h-28 sm:h-32">
          <DatoImage :image="partner.logo" class="h-full" />
        </div>
      </div>
      <TheLink
        :text="data.simpleLink.label"
        :link="data.simpleLink.internalLink"
        :url="data.simpleLink.url"
        :is-external="data.simpleLink.isExternalLink"
        variant="info"
      />
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '../../store/store'
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
const { region } = storeToRefs(useWebsiteStore())
const partners = computed(() => {
  return region.value?.partners || undefined
})
</script>
