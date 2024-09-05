<template>
  <div class="text-lg relative w-fit text-16">
    <button
      class="relative flex w-fit items-center justify-between gap-6 rounded-8 px-0"
      @click="isDropdownExpanded = !isDropdownExpanded"
      @blur="isDropdownExpanded = false"
    >
      <img
        :key="flagUrl"
        :src="flagUrl"
        class="w-20"
        alt=""
        srcset=""
      >
      <span v-if="showName" class="font-semibold uppercase text-blue-darker/60">
        {{ locale }}
      </span>
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M7.06574 0C7.46509 0 7.70328 0.445073 7.48177 0.77735L4.41602 5.37596C4.21811 5.67283 3.78189 5.67283 3.58397 5.37596L0.518233 0.77735C0.296715 0.445072 0.534911 0 0.934259 0H7.06574Z" fill="#1F2348" />
      </svg>

      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <div
          v-show="isDropdownExpanded"
          class="absolute -left-8 top-full z-50 my-8 w-full cursor-pointer divide-y  divide-blue-darker/10 overflow-hidden rounded-8 border-gray bg-white shadow"
        >
          <NuxtLink
            v-for="item in availableLocales"
            :key="item"
            :to="switchLocalePath(item)"
            class="flex  items-center justify-start gap-8 px-8 py-6"
          >
            <img
              :src="`https://flagcdn.com/84x63/${getCountryCode(item)}.png`"
              class="block w-20"
              alt=""
              srcset=""
            >
            <span v-if="showName" class="block font-semibold uppercase text-blue-darker/60">
              {{ item === 'gb' ? 'en' : item }}
            </span>
          </NuxtLink>
        </div>
      </transition>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useWebsiteStore } from '~/store/store'

defineProps({
  showName: {
    type: Boolean,
    default: true
  }
})

const { region } = storeToRefs(useWebsiteStore())
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return region.value?._locales
})
const isDropdownExpanded = ref(false)
const flagUrl = computed(() => {
  const treatedLocale = getCountryCode(locale.value)
  return `https://flagcdn.com/84x63/${treatedLocale}.png`
})

const getCountryCode = (item: string) => {
  if (item === 'en') {
    return 'gb'
  } else if (item === 'sl') {
    return 'si'
  } else {
    return item
  }
}
</script>

<style>
    .ease-custom {
    transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
    }
</style>
