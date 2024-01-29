<template>
  <nuxt-link
    :to="url"
    class="
    relative
    w-[clamp(320px,370px,calc(100vw-40px))]
          flex-1
          transition-all
                 hover:-translate-y-16
                 hover:shadow
          "
  >
    <div
      class="flex size-full flex-col rounded-6 bg-white p-8 pb-24 shadow lg:pb-24"
    >
      <img
        v-if="image"
        :src="image.url"
        class="aspect-video size-full rounded-6 object-cover"
      >
      <div
        v-else
        class="aspect-video size-full rounded-6 bg-gray"
      />

      <div class="flex w-full grow items-center justify-between p-12 pb-2 pt-16 lg:p-16 lg:pb-2">
        <h3 class="flex-1 text-15 font-bold md:text-16 lg:text-17">
          {{ name }}
        </h3>
      </div>

      <p
        v-if="url"
        class="children:!text-14 px-12 lg:px-16"
      >
        {{ url }}
      </p>

      <div
        class="text-11 mx-12 mt-12 w-max rounded px-12 py-4 font-bold uppercase ring-1 lg:mx-16 lg:text-12"
        :class="{
          '!text-[#21BCA5] !ring-[#21BCA5]': state === 'Live',
          '!text-[#FC8702] !ring-[#FC8702]': state === 'In Planning',
          '!text-[#E9B213] !ring-[#E9B213]': state === 'In Exploration',
        }"
      >
        {{ state }}
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>

defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  image: {
    type: Object,
    required: true
  }
})
</script>
