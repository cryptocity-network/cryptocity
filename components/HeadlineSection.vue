<template>
  <div
    class="headline-section flex max-w-[480px] flex-col justify-center sm:mx-auto xl:max-w-[824px] 2xl:max-w-[900px]"
    :class="{
      'text-left': textAlign === 'left',
      'items-center text-center': textAlign === 'center'
    }"
  >
    <div
      v-if="label"
      class="mb-32 w-fit py-10 text-16 font-bold uppercase text-blue/30 max-md:pl-0"
      :class="{ 'px-20': textAlign === 'center' }"
      style="letter-spacing: .17em;"
    >
      {{ label }}
    </div>
    <h1
      v-if="headline"
    >
      {{ headline }}
    </h1>
    <div
      v-if="subline"
      class="mt-32 max-w-[918px] text-20 font-semibold text-blue/60 "
    >
      <p>
        {{ subline }}
      </p>
    </div>
    <div
      v-if="link"
      class="mt-48"
    >
      <TheLink
        :text="linkLabel"
        :url="link"
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
