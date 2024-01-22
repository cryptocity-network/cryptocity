<template>
  <section
    class="pb-160"
    :class="index > 0 ? 'pt-240' : 'pt-104'"
  >
    <img
      v-if="data.image"
      :src="data.image.url"
      class="mx-auto mb-40 !max-h-[5rem] !max-w-[90vw] px-32 md:px-64 lg:!max-h-[7rem] lg:!max-w-[272px] lg:!px-0"
      alt=""
    >
    <div class="mx-auto max-w-screen-2xl px-64">
      <HeadlineSection
        :label="data.label"
        :headline="data.headline"
        :subline="data.subline"
        :link="data.link"
        :linkLabel="data.linkLabel"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>
