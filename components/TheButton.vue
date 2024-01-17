<!-- eslint-disable tailwindcss/no-arbitrary-value -->
<template>
  <button
    class=""
    :class="`nq-button-${variant}`, [
      colorClasses,
      compact ? 'text-xs' : 'text-sm',
      compact ? 'px-3 py-1' : 'py-2.5 px-3 xl:py-3 xl:px-4',
      // text ? (compact ? 'min-w-[4rem]' : 'min-w-[6rem]') : '',
      reversed ? 'flex-row-reverse' : 'flex-row',
      disabled ? 'hover:!shadow-none pointer-events-none cursor-not-allowed opacity-50' : 'opacity-100',
    ]"
    type="button"
    :name="name"
    @click="triggerClick"
  >
    <!-- <div
      v-if="text"
      :class="[medium ? 'font-medium' : 'font-normal']"
      class="leading-none"
    >
      {{ text }}
    </div>
    <div class="size-4 empty:hidden">
      <slot />
    </div> -->
  </button>
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
      switch ('standard') {
        case 'standard':
          if (this.variant === 'primary') return 'bg-radial-blue-light before:bg-radial-blue-darkened'
          if (this.variant === 'secondary') return 'text-blue-light bg-blue-light-darkened hover:text-blue-darker focus:text-blue-darker active:text-blue-darker hover:bg-blue-dark focus:bg-blue-dark active:bg-blue-dark'
          if (this.variant === 'pill') return 'text-blue bg-radial-blue-light bg-radial-blue-light hover:text-blue-darker focus:text-blue-darker active:text-blue-darker hover:bg-blue-dark focus:bg-blue-dark active:bg-blue-dark'
        case 'inverse':
          if (this.variant === 'primary') return 'bg-blue-light bg-radial-blue-light before:bg-radial-blue-darkened hover:text-blue-darker focus:text-blue-darker active:text-blue-darker'
          // No Change to below
          if (this.variant === 'secondary') return 'text-blue-light bg-blue-light-darkened hover:text-blue-darker focus:text-blue-darker active:text-blue-darker hover:bg-blue-dark focus:bg-blue-dark active:bg-blue-dark'
          if (this.variant === 'pill') return 'bg-blue-light bg-radial-blue-light before:bg-radial-blue-darkened'
          return ''
        default:
          return ''
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
