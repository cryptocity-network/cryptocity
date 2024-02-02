<template>
  <nuxt-link
    :to="getLink"
    :target="isExternalLink ? '_blank' : '_self'"
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
        '-rotate-45 group-hover:-translate-y-2 group-hover:translate-x-2': isExternalLink,
        'group-hover:translate-x-2': !isExternalLink
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
    type: String,
    required: true,
    default: null
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

const isExternalLink = computed(() => {
  return props.link[0] !== '/'
})

const getLink = computed(() => {
  if (props.link.includes('http')) {
    return props.link
  } else {
    return store.getCurrentLocale === useRuntimeConfig().public.DATO_DEFAULT_LOCALE ? props.link : '/' + store.getCurrentLocale + props.link
  }
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
