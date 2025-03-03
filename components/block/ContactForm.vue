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
        :linkedin="socialLinks.linkedIn"
      />
      <iframe
        aria-label="Contact form"
        class=" h-[725px] w-full rounded-b-6 px-16 py-8 lg:px-28 lg:py-16"
        :src="data.formUrl"
        loading="lazy"
        frameborder="0"
      />
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import ContactQuery from '../../graphql/pages/ContactPage'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import { useWebsiteStore } from '~/store/store'
import type { ContactPage } from '@/types/dato-api-responses/ContactPage'

defineProps({
  showHeader: {
    type: Boolean,
    default: true,
    required: false
  }
})

const { region }= storeToRefs(useWebsiteStore())

const { locale } = useI18n()
const query = ContactQuery(useRuntimeConfig().public.DATO_REGION_ID, locale.value)
const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<ContactPage, RTCError>
const data = computed(() => {
  if (response) {
    return response.contactPage
  }
  return null
})

const socialLinks = region.value?.socialLinks

</script>
