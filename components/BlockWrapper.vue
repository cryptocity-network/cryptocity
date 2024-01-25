<template>
  <!-- Default background-color to white in case backgroundColor is undefined, which happens when a new slice is added and the background color select field isn't interacted with -->
  <section
    :class="[
      `section-p-${paddingTop}`,
      `bg-${blockBackgroundColor || 'white'}`,
      `${(noPaddingBottom || overlapsNextSection) ? 'pb-0' : 'pb-160'}`,
      overlapsNextSection && 'overlaps-next-section',
    ]"
  >
    <slot />
  </section>
</template>

<script lang="ts" setup>
// enum Color {
//   WHITE = 'white',
//   GREY = 'grey',
//   BLUE = 'blue',
//   DARK_BLUE = 'blue-dark',
//   DARK_BLUE_DIMMED = 'blue-dark-dimmed',
//   GREEN = 'green',
//   GOLD = 'gold',
//   BLUE_S3 = 'blue-s3',
// }

// enum PaddingSection {
//   NONE = 0,
//   XS = 72,
//   XSSM = 80,
//   SM = 96,
//   MD = 136,
//   MDLG = 200,
//   LG = 240,
//   XL = 360,
// }

defineProps({
  blockBackgroundColor: {
    required: true,
    type: String
  },
  // validator: (value: any) =>
  //   value === null || Object.values(Color).includes(value)
  paddingTop: {
    default: 240,
    type: Number
  },
  // validator: (value: any) => Object.values(PaddingSection).includes(value)
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

<style scoped>
section > *:not(.wider):not(.wide):not(.widest),
section ::v-deep .default-x-padding {
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
section.nq_bg-grey,
section.nq_bg-blue-light,
section.nq_bg-blue-dark,
section.nq_bg-blue-dark-dimmed,
section.nq_bg-green {
  @apply pb-160 xl:pb-200;

  &.no-pb {
    @apply pb-0;
  }
}

section.nq_bg-white:not(.respect-size) + section.nq_bg-white,
section.nq_bg-grey:not(.respect-size) + section.nq_bg-grey,
section.nq_bg-blue-light:not(.respect-size) + section.nq_bg-blue-light,
section.nq_bg-blue-dark:not(.respect-size) + section.nq_bg-blue-dark,
section.nq_bg-blue-dark-dimmed:not(.respect-size)
  + section.nq_bg-blue-dark-dimmed,
section.nq_bg-green:not(.respect-size) + section.nq_bg-green {
  @apply -mt-160 xl:-mt-200;
}
</style>
