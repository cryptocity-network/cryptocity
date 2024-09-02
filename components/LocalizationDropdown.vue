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
      <span class="font-semibold uppercase text-blue-darker/60">
        {{ locale }}
      </span>
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
          class="absolute inset-x-0 left-1/2 top-full z-50 my-8 w-[calc(100%+16px)] -translate-x-1/2 cursor-pointer divide-y divide-blue-darker/10 overflow-hidden rounded-8 border-gray bg-white shadow"
        >
          <NuxtLink
            v-for="item in availableLocales"
            :key="item"
            :to="switchLocalePath(item)"
            class="flex  items-center justify-start gap-8 px-8 py-4"
          >
            <img
              :src="`https://flagcdn.com/84x63/${item === 'en' ? 'gb' : item}.png`"
              class="block w-20"
              alt=""
              srcset=""
            >
            <span class="block font-semibold uppercase text-blue-darker/60">
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

const { region } = storeToRefs(useWebsiteStore())
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return region.value?._locales
})
const isDropdownExpanded = ref(false)
const flagUrl = computed(() => {
  const treatedLocale = locale.value !== 'en' ? locale.value : 'gb'
  return `https://flagcdn.com/84x63/${treatedLocale}.png`
})
</script>

<style>
    .ease-custom {
    transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
    }
</style>
