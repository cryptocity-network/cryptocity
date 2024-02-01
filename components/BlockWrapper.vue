<template>
  <section
    class="py-160"
    :class="[
      `bg-${blockBackgroundColor || 'white'}`,
      `${(noPaddingBottom || overlapsNextSection) ? '!pb-0' : 'pb-160'}`,
      overlapsNextSection && 'overlaps-next-section',
    ]"
  >
    <!-- `section-p-${paddingTop}`, -->
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps({
  blockBackgroundColor: {
    required: true,
    type: String
  },
  paddingTop: {
    default: 240,
    type: Number
  },
  noPaddingBottom: {
    default: false,
    type: Boolean
  },
  overlapsNextSection: {
    default: false,
    type: Boolean
  }
})
</script>

<style>
section > *:not(.wider):not(.wide):not(.widest) {
  @apply max-w-screen-2xl mx-auto px-32 md:px-64 xl:px-72 2xl:px-136;
}

section > .mobile-wider {
  @apply max-md:!px-16;
}

section > .mobile-wide {
  @apply max-md:!px-8;
}

section > .wider {
  @apply px-16 md:px-32 xl:px-40 2xl:px-80;
}

section > .wide {
  @apply px-8 xl:px-24 2xl:px-24 max-w-full;
}

section > .widest {
  @apply max-w-[unset] px-0 mx-0;
}

/* Section paddings, each slice should be a section with one of these classes + one of the bg- classes used below */

section:first-of-type {
  @apply pt-160 xl:pt-240
}

.section-p-360 {
  @apply pt-300 xl:pt-360;
}

.section-p-240 {
  @apply pt-200 xl:pt-240;
}

.section-p-200 {
  @apply pt-160 xl:pt-200;
}

.section-p-136 {
  @apply pt-104 xl:pt-120 2xl:pt-136;
}

.section-p-96 {
  @apply pt-80 xl:pt-96;
}

.section-p-80 {
  @apply pt-72 xl:pt-80;
}

.section-p-72 {
  @apply pt-64 xl:pt-72;
}

.overlaps-next-section {
  @apply -mb-24 xl:-mb-32;
}

section.bg-white,
section.bg-gray,
section.bg-blue-light,
section.bg-blue-dark,
section.bg-blue-dark-dimmed,
section.bg-green {
  @apply pb-160 xl:pb-200;

  &.no-pb {
    @apply pb-0;
  }
}

section.bg-white + section.bg-white,
section.bg-gray + section.bg-gray {
  @apply -mt-160 xl:-mt-200;
}

section.bg-white + section:not(.bg-white),
section.bg-gray + section:not(.bg-gray) {
  margin-top: 0 !important;
}

.bg-white.i p, .bg-white p {
    color: rgba(31,35,72,.6);
}
</style>
