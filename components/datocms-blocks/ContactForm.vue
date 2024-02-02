<template>
  <BlockWrapper
    block-background-color="gray"
    :padding-top="160"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div class="relative z-1 flex !max-w-lg flex-col divide-y-1 divide-blue/10 rounded-8 bg-white !px-0 shadow ">
      <ContactCard
        v-if="showHeader && socialLinks"
        :name="socialLinks.name"
        :role="socialLinks.role"
        :email="socialLinks.email"
        :telegram="socialLinks.telegram"
        :linkedin="socialLinks.linkedin"
      />
      <iframe
        class=" h-[725px] w-full rounded-b-6 px-16 py-8 lg:px-28 lg:py-16"
        src="https://notionforms.io/forms/criptociudad-san-jose-contact-form-2"
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
</script>
