<template>
  <BlockWrapper
    v-if="data"
    block-background-color="gray"
    :padding-top="160"
    :no-padding-bottom="false"
    :overlaps-next-section="false"

    class="px-24 sm:px-0"
  >
    <div class="relative z-1 flex !max-w-lg flex-col divide-y-1 divide-blue/10 rounded-8 bg-white !px-0 shadow ">
      <ContactCard
        v-if="showHeader && socialLinks"
        :header="data.header"
        :subline="data.subline"
        :email="socialLinks.email"
        :telegram="socialLinks.telegram"
        :linkedin="socialLinks.linkedin"
      />
      <iframe
        aria-label="Contact form"
        class=" h-[725px] w-full rounded-b-6 px-16 py-8 lg:px-28 lg:py-16"
        :src="data.formUrl"
        frameborder="0"
      />
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '~/store/store'
const store = useWebsiteStore()
defineProps({
  showHeader: {
    type: Boolean,
    default: true,
    required: false
  }
})

const socialLinks = store.region?.socialLinks

const data = computed(() => {
  if (store.region && store.region._allReferencingContactPages.length > 0) {
    return store.region._allReferencingContactPages[0]
  }
  return null
})
</script>
