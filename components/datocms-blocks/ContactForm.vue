<template>
  <div class="wide bg-gray px-20 pb-160 pt-96">
    <div class="relative z-1 mx-auto flex !max-w-lg flex-col divide-y-1 divide-blue/10 rounded-8 bg-white shadow ">
      <ContactCard
        v-if="showHeader && socialLinks"
        :name="socialLinks.name"
        :role="socialLinks.role"
        :email="socialLinks.email"
        :telegram="socialLinks.telegram"
        :linkedin="socialLinks.linkedin"
        :picture="socialLinks.logo"
      />
      <iframe
        class="mx-auto h-[725px] w-full rounded-b-6 px-16 py-8 lg:px-28 lg:py-16"
        src="https://notionforms.io/forms/criptociudad-san-jose-contact-form-2"
        frameborder="0"
      />
    </div>
  </div>
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

const socialLinks = store.country?.socialLinks
</script>
