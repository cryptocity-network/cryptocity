<template>
  <section
    class="py-192"
    :class="[
      `bg-${blockBackgroundColor || 'white'}`,
      `${(noPaddingBottom || overlapsNextSection) ? '!pb-0' : 'pb-160'}`,
      overlapsNextSection && 'overlaps-next-section',
    ]"
  >
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps({
  blockBackgroundColor: {
    required: true,
    type: String
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

.overlaps-next-section {
  @apply -mb-24 xl:-mb-32;
}

section.bg-white,
section.bg-gray {
  @apply py-160 xl:py-200;

  &.no-pb {
    @apply pb-0;
  }
}

section.bg-white + section.bg-white,
section.bg-gray + section.bg-gray {
  @apply -mt-[9.5rem] xl:-mt-[11.5rem];
}

section.bg-white + section:not(.bg-white),
section.bg-gray + section:not(.bg-gray) {
  margin-top: 0 !important;
}

section.hero {
  @apply !pt-192;

  &.bg-gray {
    @apply !pb-120;
  }
}

section.title {
  @apply pb-80 lg:pb-96
}
section.events-carousel {
  @apply pb-80 lg:pb-96
}

section.half-image-hero + section {
  @apply pt-192 xl:pt-240
}
section.cities-grid + section {
  @apply py-120 xl:py-120 !-mt-0
}

/* section.title.bg-white + section.bg-white,
section.title.bg-gray + section.bg-gray {
  @apply pt-136 xl:pt-136;
} */

.bg-white.i p, .bg-white p {
    color: rgba(31,35,72,.6);
}
</style>
