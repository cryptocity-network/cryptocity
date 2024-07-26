<template>
  <NuxtLinkLocale
    v-if="!appStoreLinkType"
    :to="getLink"
    :target="isExternal ? '_blank' : '_self'"
    class="group flex w-fit max-w-full cursor-pointer items-center justify-center gap-6 rounded-full font-bold transition-all"
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
  </NuxtLinkLocale>
  <nuxt-link v-else :to="isExternal ? getLink : localePath(getLink)">
    <AppleStore v-if="appStoreLinkType === 'apple'" class="h-40 transition-transform hover:scale-105" />
    <PlayStore v-else-if="appStoreLinkType === 'google'" class="h-40 transition-transform hover:scale-105" />
  </nuxt-link>
</template>

<script lang="ts" setup>
import Arrow from '@/static/icons/arrow.svg'
import AppleStore from '@/assets/App-store.svg'
import PlayStore from '@/assets/Play-store.svg'

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
    required: false,
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
const localePath = useLocalePath()

const appStoreLinkType: Ref<null | string> = ref(null)
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

onMounted(() => {
  setUrlLink()
})

const getLink = computed(() => {
  // File is url
  if (!props.link) {
    return setUrlLink()
  // File is a reference
  } else if ('name' in props.link) {
    return `/${props.link.name}` as string
  } else if ('_modelApiKey' in props.link) {
    switch (props.link._modelApiKey) {
      case 'home_page':
        return '/'
      case 'beginner_page':
        return '/beginners'
      case 'merchant_page':
        return '/merchants'
      case 'news_page':
        return '/news'
      case 'network_page':
        return '/network'
      case 'about_page':
        return '/about'
      case 'contact_page':
        return '/contact'
      default:
        return '/'
    }
  }
  return '/'
})

const setUrlLink = () => {
  // Check for app store links
  if (props.url?.includes('https://apps.apple.com')) {
    appStoreLinkType.value = 'apple'
  } else if (props.url?.includes('https://play.google.com/store')) {
    appStoreLinkType.value = 'google'
  } else {
    appStoreLinkType.value = null
  }
  // Return url with check for potential relative link usage
  return props.url
}
</script>

<style scoped>
.router-link-active {
  @apply text-blue-dark
}
.router-link-active.info {
  @apply text-white bg-radial-blue-light-darkened drop-shadow-sm
}
</style>
