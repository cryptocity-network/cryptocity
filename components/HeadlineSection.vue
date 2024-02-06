<template>
  <div
    class="headline-section flex max-w-[480px] flex-col justify-center xl:max-w-[824px] 2xl:max-w-[900px]"
    :class="{
      'items-start text-left sm:mx-auto sm:items-center sm:text-center lg:items-start lg:text-left': textAlign === 'left',
      'sm:mx-auto sm:items-center sm:text-center': textAlign === 'center'
    }"
  >
    <div
      v-if="label"
      class="mb-12 w-fit text-16 font-bold uppercase text-blue/30 sm:pl-0 xl:text-18"
      :class="{ 'sm:px-20': textAlign === 'center' }"
      style="letter-spacing: .17em;"
    >
      {{ label }}
    </div>
    <h1
      v-if="headline"
      class="xl:text-48"
    >
      {{ headline }}
    </h1>
    <div
      v-if="subline"
      class="mt-16 max-w-[918px] text-20 font-semibold text-blue/60 lg:mt-20 xl:text-24 "
    >
      <p>
        {{ subline }}
      </p>
    </div>
    <div
      v-if="link"
      class="mt-32 sm:mt-48"
    >
      <TheLink
        :text="linkLabel"
        :link="link"
        variant="info"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: false,
    default: null
  },
  headline: {
    type: String,
    required: false,
    default: null
  },
  subline: {
    type: String,
    required: false,
    default: null
  },
  link: {
    type: String,
    required: false,
    default: null
  },
  linkLabel: {
    type: String,
    required: false,
    default: null
  },
  textAlign: {
    type: String,
    required: false,
    default: 'center'
  }

})
</script>
