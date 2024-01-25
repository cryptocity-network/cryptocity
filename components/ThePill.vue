<!-- eslint-disable tailwindcss/no-arbitrary-value -->
<template>
  <button
    class="nq-button-s"
    :class="[
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
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
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
      default: null,
      validator: (value) => {
        // The value must match one of these strings
        return ['success', 'danger', 'info', 'warning', 'disabled', ''].includes(value)
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
      switch (this.type) {
        case 'success':
          return this.transparent ? 'bg-transparent hover:underline text-success-500 hover:text-success-900' : 'bg-success-500 shadow-sm hover:bg-success-900 text-primary-200'
        case 'danger':
          return this.transparent ? 'bg-transparent hover:underline text-danger-500 hover:text-danger-900' : 'bg-danger-500 shadow-sm hover:bg-danger-900 text-primary-200'
        case 'info':
          return this.transparent ? 'bg-transparent hover:underline text-info-500 hover:text-info-900' : 'bg-info-500 shadow-sm hover:bg-info-900 text-primary-100'
        case 'warning':
          return this.transparent ? 'bg-transparent hover:underline text-warning-500 hover:text-warning-900' : 'bg-warning-500 shadow-sm hover:bg-warning-900 text-primary-100'
        case 'disabled':
          return this.transparent ? 'bg-transparent hover:underline text-primary-400 hover:text-primary-900' : 'bg-primary-500 shadow-sm hover:bg-primary-900 text-primary-100'
        default:
          return this.transparent ? 'bg-transparent text-primary-800 hover:text-info-700' : 'bg-primary-100 border-1 shadow-sm border-primary-400 text-primary-800 hover:text-info-700 hover:border-info-500'
      }
    }
  },
  methods: {
    triggerClick (e) {
      if (this.noPropagation) { e.stopPropagation() }
      this.$emit('click', e)
    }
  }
}
</script>

<style>
.nq-button::-moz-focus-inner,
.nq-button-s::-moz-focus-inner {
    border: 0;
}

.nq-button-s,
.nq-button-pill {
    display: inline-block;
    font-size: 1.75rem;
    line-height: 3.375rem;
    height: 3.375rem;
    text-decoration: none;
    font-weight: bold;
    padding: 0 1.5rem;
    background-color: rgba(31, 35, 72, 0.07);
    color: theme(colors.blue.DEFAULT);
    border-radius: 1.6875rem;
    transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
    will-change: color, background-color;
    border: none;
    cursor: pointer;
    position: relative;
    font-family: inherit;
}

.nq-button-s[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
}

.nq-button-s::before,
.nq-button-pill::before {
    content: '';
    display: block;
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
    right: -1.5rem;
    bottom: -1.5rem;
}
</style>
