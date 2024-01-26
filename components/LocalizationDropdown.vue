<template>
  <div class="text-lg relative text-16">
    <button
      class="flex w-full items-center justify-between gap-8 rounded-8  px-16 py-4"
      @click="isDropdownExpanded = !isDropdownExpanded"
      @blur="isDropdownExpanded = false"
    >
      <img
        :src="`https://flagcdn.com/84x63/${selectedLocale}.png`"
        class="w-20"
        alt=""
        srcset=""
      >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="size-12 transition-transform duration-200 ease-in-out"
        :class="isDropdownExpanded ? 'rotate-180' : 'rotate-0'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-300 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="isDropdownExpanded"
        class="absolute inset-x-0 top-full my-8 cursor-pointer divide-y divide-blue-darker/10 overflow-hidden rounded-8 border-gray bg-white shadow"
      >
        <li
          v-for="(locale, index) in localeIcons"
          :key="index"
          class="px-16 py-6 transition-colors duration-300 hover:bg-blue-light/20"
          @mousedown.prevent="setLocale(locale)"
        >
          <img
            :src="`https://flagcdn.com/84x63/${locale}.png`"
            class="w-20"
            alt=""
            srcset=""
          >
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useWebsiteStore } from '../store/store'
const store = useWebsiteStore()

const locales = store.localization.siteLocales

const localeIcons = computed(() => {
  const iconArray = [] as Array<string>
  if (locales) {
    locales.forEach((locale) => {
      iconArray.push(locale !== 'en' ? locale : 'gb')
    })
  }
  return iconArray
})

const isDropdownExpanded = ref(false)
const selectedLocale = computed(() => {
  const currentLocale = store.localization.userSelectedLocale || useRuntimeConfig().public.DATO_DEFAULT_LOCALE
  return currentLocale !== 'en' ? currentLocale : 'gb'
})

const setLocale = (option: string) => {
  isDropdownExpanded.value = false
  store.setLocale(option !== 'gb' ? option : 'en')
  // Route to home as route slugs are language specific
  useRouter().push('/')
}
</script>

<style>
    .ease-custom {
    transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
    }
</style>
