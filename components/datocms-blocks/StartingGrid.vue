<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div
      class="
        grid
        grid-cols-1
        grid-rows-[224px_224px_224px] gap-8
        md:gap-24
        lg:grid-cols-3 lg:grid-rows-1 lg:gap-32
      "
    >
      <nuxt-link
        v-for="(item, i) in data.items"
        :key="item.id"
        :to="links[i]"
        class="group relative size-full overflow-hidden rounded-8 transition-transform  hover:md:-translate-y-12 lg:aspect-[6/8] lg:odd:mt-20 lg:even:-mt-28"
      >
        <ClientOnly>
          <FadeInImage
            :image-url="item.image.url"
            class="size-full object-cover"
          />
          <div class="absolute left-0 top-0 size-full bg-gradient-to-t from-blue-darker to-transparent transition-opacity group-hover:opacity-0" />
          <div class="absolute left-0 top-0 size-full bg-blue-darker/5 opacity-0 transition-opacity group-hover:opacity-100" />
          <div class="absolute bottom-20 left-16 text-14 text-white">
            <div class="flex items-center  gap-4 font-bold">
              <span>{{ item.label }}</span>
              <Arrow class="size-10" />
            </div>
            <p>{{ item.description }}</p>
          </div>
        </ClientOnly>
      </nuxt-link>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>

import Arrow from '@/static/icons/arrow.svg'
import { useWebsiteStore } from '~/store/store'
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
const pages = store.getPages
const links = computed(() => {
  let locale = ''
  if (store.localization.userSelectedLocale !== useRuntimeConfig().public.DATO_DEFAULT_LOCALE) {
    locale = '/' + useRoute().params.locale as string
  }
  if (pages) {
    return [
      locale + '/' + pages[1].slug,
      locale + '/' + pages[2].slug,
      locale + '/' + pages[3].slug
    ]
  } else {
    return [
      locale + '/',
      locale + '/',
      locale + '/'
    ]
  }
})

</script>

  <style scoped>
  * ::v-deep .small.prose p {
    color: rgba(255, 255, 255, 0.8) !important;
  }
  </style>
