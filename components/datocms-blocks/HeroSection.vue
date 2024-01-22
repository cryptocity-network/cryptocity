<template>
  <img
    v-if="data.image"
    :src="data.image.url"
    class="mx-auto mb-40 !max-h-[5rem] !max-w-[90vw] px-32 md:px-64 lg:!max-h-[7rem] lg:!max-w-[272px] lg:!px-0"
    alt=""
  >
  <div class="mx-auto max-w-screen-2xl px-64">
    <div class="headline-section flex max-w-[480px] flex-col justify-center sm:mx-auto sm:items-center sm:text-center xl:max-w-[824px] 2xl:max-w-[900px]">
      <div
        v-if="data.label"
        class="mb-32 w-fit px-20 py-10 text-16 font-bold uppercase text-blue/30 max-md:pl-0"
        style="letter-spacing: .17em;"
      >
        {{ data.label }}
      </div>
      <h1
        v-if="data.headline"
      >
        {{ data.headline }}
      </h1>
      <div
        v-if="data.subline"
        class="nq_subline mt-32 max-w-[918px] text-20 font-semibold text-blue/60 md:text-center"
      >
        <p>
          {{ data.subline }}
        </p>
      </div>
      <div
        v-if="data.link"
        class="mt-48"
      >
        <TheLink
          :text="data.linkLabel"
          :url="data.link"
          variant="info"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
