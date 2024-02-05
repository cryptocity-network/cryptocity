<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div v-if="partners" class="flex flex-wrap items-center gap-x-40 gap-y-24 sm:justify-center">
      <img v-for="(partner, i) in partners" :key="i" :src="partner.logo.url" :alt="partner.logo.alt" class="max-w-[calc(50%-20px)] opacity-75 grayscale md:max-w-[170px]">
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
