<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div v-if="partners" class="relative flex flex-wrap items-center gap-x-40 gap-y-24 px-40 sm:justify-center">
      <div class="mx-auto max-w-screen-2xl px-64 pb-40">
        <HeadlineSection
          :label="data.headline.label"
          :headline="data.headline.headline"
          :subline="data.headline.subline"
        />
      </div>
      <div v-for="(partner, i) in partners" :key="i" class="mb-40 inline-flex h-28 overflow-hidden md:h-32">
        <div class="relative  flex h-28  md:h-32">
          <img :src="partner.logo.url" :alt="partner.logo.alt">
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
const store = useWebsiteStore()
const partners = computed(() => {
  return store.region ? store.region.partners : null
})
</script>
