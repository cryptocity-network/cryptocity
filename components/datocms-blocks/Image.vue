// eslint-disable-next-line vue/multi-word-component-names
<template>
  <BlockWrapper
    :block-background-color="data.settings.backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="!pt-96"
  >
    <div class="size-full !px-16 md:!px-96">
      <img v-if="data.image?.url" class="size-full rounded-6 shadow" :src="data.image.url" :alt="data.image.alt">
    </div>
  </BlockWrapper>
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
