<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="!pt-96"
  >
    <ul
      v-if="partners"
      class="mx-auto grid max-w-screen-2xl grid-cols-1 place-items-center items-stretch justify-items-stretch md:grid-cols-2 md:!px-32 lg:!px-48"
      :class="[
        {
          'justify-center': partners.length === 1,
          'divide-x-1 divide-blue-dark/10': partners.length <= 2,
        },
      ]"
    >
      <!-- :label="item.label"
    :badge="item.badge" -->
      <BlockPartner
        v-for="(item, i) in partners"
        :key="i"
        :description="item.description"
        :logo="item.logo"
        :company-name="item.companyName"
        :link-label="item.linkLabel"
        :link-href="item.linkUrl"
        :twitter="item.socials.twitter"
        :facebook="item.socials.facebook"
        :instagram="item.socials.instagram"
        :linkedin="item.socials.linkedIn"
        :telegram="item.socials.telegram"
        :email="item.socials.email"
        :youtube="item.socials.youtube"
        :discord="item.socials.discord"
        :whatsapp="item.socials.whatsapp"
        :center="partners.length === 1"
        :class="{
          'md:border-r-1 md:border-blue-dark/10': partners.length > 1 && i % 2 === 0,
          'md:!border-b-1 md:border-blue-dark/10': i < partners.length - 2,
          'border-t-1 border-blue-dark/10 md:border-t-0': i > 0,
        }"
      />
    </ul>
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
