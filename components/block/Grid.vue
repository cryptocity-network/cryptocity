<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <ul class="grid grid-cols-[repeat(1,minmax(0,1fr))] gap-48 md:grid-cols-[repeat(2,minmax(0,1fr))] md:gap-72 xl:grid-cols-[repeat(3,minmax(0,1fr))] 2xl:gap-80">
      <li
        v-for="(item, i) in data.gridItems"
        :key="i"
        class="grid auto-cols-[auto_1fr] auto-rows-[auto_1fr] gap-x-20 gap-y-12 md:gap-y-16"
      >
        <img
          v-if="item.icon"
          :src="item.icon.url"
          :alt="item.icon.alt"
          class="size-48 md:size-56 xl:size-64"
        >
        <h3 class="flex items-center">
          {{ item.headline }}
        </h3>
        <p class="secondary col-span-2 text-blue/60">
          {{ item.subline }}
        </p>
      </li>
    </ul>
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
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})
</script>
