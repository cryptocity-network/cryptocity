<template>
  <div
    ref="root$"
    :class="{
      'is-inverted': isInverted,
      'is-sticky': isSticky,
      'is-scrolled': isScrolled,
    }"
    class="relative"
  >
    <!-- Hamburger icon -->
    <button class="hamburger" aria-label="Navigation dropdown" :class="{ active: menuVisible }" @click="menuVisible = !menuVisible">
      <span />
      <span />
      <span />
    </button>

    <nav :class="{ visible: menuVisible }" class="menu-wrapper">
      <ul class="flex flex-col gap-12 transition-opacity duration-75">
        <li
          v-for="(item, i) in pages || []"
          :key="i"
          class="flex"
          @click="menuVisible = false"
        >
          <TheLink
            v-if="item._modelApiKey !== 'home_page'"
            :text="item.navigationLabel"
            :url="getRouteName(item._modelApiKey)"
            compact
            hide-arrow
          />
        </li>
        <LocalizationDropdown />
      </ul>

      <!-- Copyright notice -->
      <p class="copyright-note">
        © Cryptocity Association 2022-{{ currentYear }}
      </p>
    </nav>

    <ModalTooltip :class="{ visible: menuVisible }" class="modal-tooltip" />
  </div>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '../store/store'
import { useOutsideClick } from '@/composables/useClickOutside'
import ModalTooltip from '@/static/icons/modal-tooltip.svg'

defineProps({
  isInverted: {
    default: false,
    type: Boolean
  },
  isSticky: {
    default: false,
    type: Boolean
  },
  isScrolled: {
    default: false,
    type: Boolean
  }
})

const store = useWebsiteStore()
const pages = computed(() => store.pages)

const menuVisible = ref(false)
const root$ = ref<HTMLDivElement | null>(null)

const getRouteName = (name: string) => {
  switch (name) {
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

useOutsideClick(root$, () => {
  menuVisible.value = false
})
const currentYear = new Date().getFullYear() // user year

</script>

  <style scoped>
  .hamburger {
    @apply box-content flex flex-col justify-between w-22 h-22 opacity-30 transition-opacity hover:opacity-60;

    span {
      @apply w-full h-2 bg-blue-dark rounded-8 transform transition-transform-width;

      &:nth-child(1) {
        @apply w-22 translate-x-0;
      }

      &:nth-child(2) {
        @apply w-20 translate-x-2;
      }

      &:nth-child(3) {
        @apply w-18 translate-x-4;
      }
    }

    &.active {
      @apply opacity-60;

      span:nth-child(2) {
        @apply w-22 translate-x-0;
      }

      span:nth-child(1),
      span:nth-child(3) {
        @apply w-14 translate-x-4;
      }
    }
  }

  .menu-wrapper {
    @apply opacity-0 p-24 font-semibold top-full rounded-6 border-1 border-gray pointer-events-none cursor-default transition-transform-opacity bg-white shadow-around absolute transform -right-16 translate-y-28 -mt-1 w-[calc(100vw-32px)] max-w-[370px] max-h-[calc(100vh-104px)];

    &.visible {
      @apply opacity-100 overflow-auto overscroll-contain pointer-events-auto;
    }
  }

  .main-buttons {
    @apply flex gap-20;
  }

  .modal-tooltip {
    @apply shrink-0 w-32 h-auto opacity-0 transition-transform-opacity text-gray absolute left-1/2 -translate-x-1/2 top-full translate-y-16 transform;

    &.visible {
      @apply opacity-100;
    }
  }

  .border-bottom {
    @apply border-b-1 border-gray;
  }

  .mobile-menu {
    &.is-inverted {
      .hamburger span {
        @apply bg-white;
      }
    }

    &.is-sticky {
      .menu-wrapper {
        @apply translate-y-32;
      }

      .modal-tooltip {
        @apply translate-y-20;
      }
    }

    &.is-scrolled {
      .menu-wrapper.visible {
        @apply opacity-0 pointer-events-none;
      }
      &.is-sticky {
        .menu-wrapper.visible {
          @apply opacity-100 pointer-events-auto;
        }
      }
    }
  }

  .copyright-note {
    @apply opacity-30 mt-16 font-regular;
  }
  </style>
