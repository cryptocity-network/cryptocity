<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div v-if="partners" class="relative flex flex-wrap items-center gap-x-40 gap-y-24 px-40 sm:justify-center">
      <div v-for="(partner, i) in partners" :key="i" class="inline-flex h-28 overflow-hidden md:h-32">
        <div class="relative -top-full flex h-28 opacity-40 drop-shadow-[0_32px_0px_rgb(31,35,72)] md:h-32">
          <img :src="partner.logo.url" :alt="partner.logo.alt">
        </div>
      </div>
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
