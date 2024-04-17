// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div
    class="my-24"
  >
    <DatoImage
      v-if="data.image"
      :priority="true"
      class="size-full rounded-6 shadow"
      :image="data.image"
    />
    <figcaption class="mt-16 text-14 font-bold text-blue/60">
      Our sweet-spot: The only way in, the only way out.
    </figcaption>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})
</script>
