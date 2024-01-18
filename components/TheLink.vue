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
      class="leading-none capitalize"
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
    invert: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['click'],
  computed: {
    colorClasses () {
      switch (this.variant) {
        case 'info':
          return 'text-white shadow bg-blue-light bg-radial-blue-light hover:bg-radial-blue-light-darker focus:bg-radial-blue-light-darker active:bg-radial-blue-light-darker'
        default:
          return this.invert ? '!p-0 text-white' : '!p-0 text-blue-dark/50 hover:text-blue-dark/70'
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
