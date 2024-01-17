<template>
  <div class="pb-160 pt-136">
    <img
      v-if="image"
      src=""
      class="nq_r-mb-40 !max-h-[5rem] !max-w-[90vw] lg:!max-h-[7rem] lg:!max-w-[272px] lg:!px-0"
      alt=""
    >
    <div class="mx-auto max-w-screen-2xl px-64">
      <div class="headline-section flex max-w-[480px] flex-col justify-center sm:mx-auto sm:items-center sm:text-center xl:max-w-[824px] 2xl:max-w-[900px]">
        <div
          class="mb-32 w-fit px-20 py-10 text-16 font-bold uppercase text-blue/30 max-md:pl-0"
          style="letter-spacing: .17em;"
        >
          {{ label }}
        </div>
        <h1>{{ heroTitle }}</h1>
        <div class="nq_subline mt-32 max-w-[918px] text-20 font-semibold text-blue/60 md:text-center">
          <p>
            {{ subHeading }}
          </p>
        </div>
        <div
          v-if="link"
          class="mt-48"
        >
          <TheLink
            text="Kontakt"
            url="www.google.com"
            variant="info"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  heroTitle: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  subHeading: {
    type: String,
    required: true
  },
  image: {
    type: Object,
    required: true
  }
})
</script>
