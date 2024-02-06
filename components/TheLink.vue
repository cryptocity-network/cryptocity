<template>
  <nuxt-link
    :to="getLink"
    :target="isExternal ? '_blank' : '_self'"
    class="group flex w-fit max-w-full cursor-pointer items-center justify-center gap-8 rounded-full font-bold transition-all"
    :class="[
      {
        'secondary !px-0': secondary,
        'px-16 py-4 text-14': compact,
        'px-24 py-6 text-16 lg:text-18': !compact,
      },
      colorClasses,
      variant
    ]
    "
  >
    {{ text }}
    <Arrow
      v-if="!hideArrow"
      class="h-auto w-12 shrink-0 transition-transform group-hover:translate-x-2"
      :class="{
        '-rotate-45 group-hover:-translate-y-2 group-hover:translate-x-2': isExternal,
        'group-hover:translate-x-2': !isExternal
      }"
    />
  </nuxt-link>
</template>

<script lang="ts" setup>
import Arrow from '@/static/icons/arrow.svg'
import { useWebsiteStore } from '~/store/store'
const store = useWebsiteStore()
const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: 'default'
  },
  text: {
    type: String,
    required: true,
    default: null
  },
  link: {
    type: Object,
    required: false,
    default: null
  },
  url: {
    type: String,
    required: true,
    default: null
  },
  isExternal: {
    type: Boolean,
    required: false,
    default: false
  },
  compact: {
    type: Boolean,
    required: false,
    default: false
  },
  secondary: {
    type: Boolean,
    required: false,
    default: false
  },
  invert: {
    type: Boolean,
    required: false,
    default: false
  },
  hideArrow: {
    type: Boolean,
    required: false,
    default: false
  },
  noLocale: {
    type: Boolean,
    required: false,
    default: false
  }
})
defineEmits(['click'])
const colorClasses = computed(() => {
  switch (props.variant) {
    case 'info':
      return props.secondary
        ? 'text-blue-light'
        : 'text-white shadow bg-blue-light bg-radial-blue-light hover:bg-radial-blue-light-darker focus:bg-radial-blue-light-darker active:bg-radial-blue-light-darker'
    default:
      return props.invert
        ? '!p-0 text-white'
        : '!p-0 text-blue-dark/50 hover:text-blue-dark/70'
  }
})

const getLink = computed(() => {
  const defaultLocale = useRuntimeConfig().public.DATO_DEFAULT_LOCALE
  const storeLocale = store.getCurrentLocale
  if (!props.link) {
    if (props.url?.includes('http')) {
      return props.url
    } else {
      return storeLocale === defaultLocale || props.noLocale ? props.url : '/' + storeLocale + props.url
    }
  } else if ('slug' in props.link) {
    return storeLocale === defaultLocale
      ? `/${props.link.slug}`
      : `/${storeLocale}/${props.link.slug}`
  } else if ('name' in props.link) {
    return storeLocale === defaultLocale
      ? `/${props.link.name}`
      : `/${storeLocale}/${props.link.name}`
  } else if ('id' in props.link) {
    return storeLocale === defaultLocale
      ? '/'
      : `/${storeLocale}`
  }
  return '/'
})
</script>

<style scoped>
.router-link-active {
  @apply text-blue-dark
}
.router-link-active.info {
  @apply text-white bg-radial-blue-light-darkened drop-shadow-sm
}
</style>
