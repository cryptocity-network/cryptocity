<template>
  <div class="relative z-1 mx-auto flex w-full max-w-lg flex-col rounded-8 bg-white shadow lg:divide-y-1 lg:divide-blue/10 ">
    <ContactCard
      v-if="showHeader && socialLinks"
      :name="socialLinks.name"
      :role="socialLinks.role"
      :email="socialLinks.email"
      :telegram="socialLinks.telegram"
      :linkedin="socialLinks.linkedin"
      :picture="socialLinks.image"
    />
    <iframe
      class="mx-auto h-[725px] w-full rounded-b-6 px-40 py-16 lg:px-28 lg:py-16"
      src="https://notionforms.io/forms/criptociudad-san-jose-contact-form-2"
      frameborder="0"
    />
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
