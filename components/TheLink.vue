<!-- eslint-disable tailwindcss/no-arbitrary-value -->
<template>
  <nuxt-link
    :to="link"
    class="flex w-fit max-w-full cursor-pointer items-center justify-center rounded-full font-bold transition-all"
    :class="[
      compact ? 'text-14' : 'text-16',
      compact ? 'px-16 py-4' : 'px-24 py-6',
      colorClasses,
      // text ? (compact ? 'min-w-[4rem]' : 'min-w-[6rem]') : '',
    ]"
  >
    <div
      v-if="text"
      :class="[medium ? 'font-medium' : 'font-normal']"
      class="leading-none"
    >
      {{ text }}
    </div>
    <div class="size-4 empty:hidden">
      <slot />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary'
    },
    text: {
      type: String,
      required: true,
      default: null
    },
    href: {
      type: String,
      required: true,
      default: null
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'light-blue',
      validator: (value) => {
        // The value must match one of these strings
        return ['light-blue', 'danger', 'info', 'warning', 'disabled', ''].includes(value)
      }
    },
    transparent: {
      type: Boolean,
      required: false,
      default: false
    },
    reversed: {
      type: Boolean,
      required: false,
      default: false
    },
    medium: {
      type: Boolean,
      required: false,
      default: false
    },
    noPropagation: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ['click'],
  computed: {
    colorClasses () {
      switch (this.variant) {
        case 'info':
          return 'text-white shadow bg-blue-light bg-radial-blue-light hover:bg-radial-blue-light-darker focus:bg-radial-blue-light-darker active:bg-radial-blue-light-darker'
        default:
          return '!p-0 text-blue-dark/50 hover:text-blue-dark/70'
      }
    }
  },
  methods: {
    triggerClick (e) {
      if (this.noPropagation) e.stopPropagation()
      this.$emit('click', e)
    }
  }
}
</script>
