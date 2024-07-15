<template>
  <div
    class="logo"
  >
    <svg class="size-full" :viewBox="`0 0 ${90+regionTextWidth} 63`" fill="none" xmlns="http://www.w3.org/2000/svg">
      <transition mode="out-in" name="slide-fade">
        <text
          v-if="type !== 'region' && getCityName"
          :fill="textColor"
          xml:space="preserve"
          style="white-space: pre"
          font-family="Mulish"
          font-size="21"
          font-weight="bold"
          letter-spacing="0.6px"
        ><tspan x="75" y="55.4275">{{ getCityName }}</tspan></text>
      </transition>
      <g
        class="transition-transform duration-200"
        :class="type !== 'region' && getCityName ? 'translate-y-0' : 'translate-y-[14.5px]'"
      >
        <text
          ref="regionText"
          :fill="textColor"
          xml:space="preserve"
          class="uppercase"
          style="white-space: pre"
          font-family="Mulish"
          font-size="29"
          font-weight="bold"
          letter-spacing="0.9px"
        >
          <tspan x="74.5" y="29.9475">
            {{ getBrandName }}<tspan v-if="isRegistered" font-size="16" dy="-10">&#xae;</tspan><tspan v-if="isTrademark" font-size="16" dy="-10">&trade;</tspan>
          </tspan>
        </text>
      </g>
      <path d="M42.5383 14.1628C42.5383 14.1628 42.4418 14.1586 42.3454 14.1543C42.3454 14.1543 42.3454 14.1543 42.249 14.15L41.092 14.0988L38.5809 14.0842L25.0612 13.9684L25.0655 13.872C25.2047 8.56725 29.2628 4.20853 34.5078 3.57171C34.5078 3.57171 34.6042 3.57598 34.7007 3.58025C34.7971 3.58452 34.8935 3.58879 34.8935 3.58879L34.9899 3.59305L36.1469 3.64428L38.373 3.54973L51.8927 3.66554L51.8885 3.76191C51.8413 9.16729 47.6826 13.6181 42.5383 14.1628Z" :fill="logoColor ? logoColor : '#FC8702'" />
      <path d="M22.7912 16.1952C22.7912 16.1952 22.7912 16.2917 22.6947 16.2917V16.5811L22.1156 17.3528L20.861 19.5716L14.0087 31.2441C14.0087 31.2441 14.0087 31.2441 13.9122 31.2441C9.27966 28.543 7.44595 22.755 9.56919 17.9316C9.56919 17.9316 9.56919 17.8352 9.6657 17.8352C9.6657 17.7387 9.76221 17.6422 9.76221 17.6422L9.85873 17.5458L10.4378 16.5811L11.5959 14.6518L18.3517 2.88281C18.3517 2.88281 18.3517 2.88281 18.4482 2.88281C23.0807 5.68035 24.9145 11.3719 22.7912 16.1952Z" :fill="logoColor ? logoColor : '#E9B213'" />
      <path d="M22.8906 49.2864C18.1615 51.9875 12.3709 50.637 9.186 46.4889L9.08949 46.3924L8.99298 46.1995L8.89647 46.103L8.3174 45.1384L7.15927 43.209L0.5 31.4401C0.5 31.4401 0.5 31.4401 0.596511 31.4401C5.32556 28.739 11.1162 30.0895 14.3011 34.2376L14.3976 34.3341L14.9767 35.2987L16.2313 37.5175L22.8906 49.2864Z" :fill="logoColor ? logoColor : '#21BCA5'" />
      <path d="M33.5071 61.4375C33.5071 61.4375 33.4106 61.4375 33.3141 61.4375C33.3141 61.4375 33.3141 61.4375 33.2176 61.4375H32.0594H29.5501H16.0386V61.3411C16.0386 55.9389 20.092 51.5014 25.3036 50.8262C25.3036 50.8262 25.4002 50.8262 25.4967 50.8262C25.5932 50.8262 25.6897 50.8262 25.6897 50.8262H25.7862H26.9443H29.1641H42.6756V50.9226C42.7722 56.3248 38.8152 60.7623 33.5071 61.4375Z" :fill="logoColor ? logoColor : '#0582CA'" />
      <path d="M58.7907 47.548C58.7907 47.548 58.7907 47.6445 58.6942 47.6445L58.1151 48.6091L56.8604 50.8279L50.1047 62.5004C50.1047 62.5004 50.1047 62.5004 50.0082 62.5004C45.3756 59.7993 43.4454 54.1077 45.5686 49.2844C45.5686 49.2844 45.5686 49.1879 45.6652 49.1879C45.6652 49.0915 45.7617 48.995 45.7617 48.995L45.8582 48.8985L46.4372 47.9339L47.5954 46.0045L54.3512 34.332C54.3512 34.332 54.3512 34.332 54.4477 34.332C58.9837 37.0331 60.8174 42.7246 58.7907 47.548Z" :fill="logoColor ? logoColor : '#1F2348'" />
      <path d="M68.3473 33.2702C63.7147 36.0678 57.8275 35.0066 54.5462 30.8586L54.4497 30.7621L54.3531 30.5692L54.2566 30.4727L53.6776 29.508L52.5194 27.5787L45.4741 16.0991C45.4741 16.0991 45.4741 16.0991 45.5706 16.0991C50.2032 13.3016 56.0903 14.3627 59.3717 18.5108L59.4682 18.6073L60.0473 19.5719L61.3985 21.6942L68.3473 33.2702C68.4438 33.2702 68.4438 33.2702 68.3473 33.2702Z" :fill="logoColor ? logoColor : '#D94432'" />
    </svg>
  </div>
</template>

<script lang="ts" setup>

import { useWebsiteStore } from '~/store/store'
const props = defineProps({
  textColor: {
    type: String,
    default: 'rgb(21,24,51)'
  },
  logoColor: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'region'
  },
  cityName: {
    type: String,
    default: null
  },
  brandName: {
    type: String,
    default: null
  },
  registered: {
    type: Boolean,
    default: null
  },
  trademark: {
    type: Boolean,
    default: null
  }
})

const isRegistered = computed(() => {
  return props.registered || (store.region?.brandName === getBrandName.value && store.region?.brandIntellectualPropertySymbols === 'registered')
})
const isTrademark = computed(() => {
  return props.trademark || (store.region?.brandName === getBrandName.value && store.region?.brandIntellectualPropertySymbols === 'trademark')
})

const regionText = ref()
const store = useWebsiteStore()
const regionTextWidth = computed(() => {
  return regionText.value?.getBBox().width || 400
})

const getBrandName = computed(() => {
  return props.brandName || store.region?.brandName
})

const getCityName = computed(() => {
  if (props.cityName) { return props.cityName.toUpperCase() } else if (props.type !== 'region') {
    const prettyUrlName = useRoute().path.split('/').pop()?.replace(/%20/g, ' ')
    if (store.region?._allReferencingCities.find((x) => {
      return x.name.toLowerCase() === prettyUrlName?.toLowerCase()
    }
    )) {
      return prettyUrlName?.toUpperCase()
    }
  }
  return null
})
</script>
<style scoped>
.logo * {
  @apply transform-gpu;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
