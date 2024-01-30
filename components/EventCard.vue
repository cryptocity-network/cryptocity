<template>
  <div
    class="group relative flex h-full w-[clamp(320px,370px,80vw)] cursor-pointer flex-col rounded-6 border-1 border-gray bg-white shadow transition-all will-change-transform"
  >
    <div v-if="image" class="relative h-240 rounded-4 p-6 pb-0">
      <img :src="image.url" class="size-full rounded-4 object-cover">
      <div class="absolute right-18 top-18 rounded bg-white px-16 py-8 text-16 font-bold leading-1 text-blue-dark">
        {{ getDate(start) }}
        <span v-if="end">
          - {{ getDate(end) }}
        </span>
      </div>
    </div>

    <div v-if="title" class="flex grow flex-col justify-between gap-20 p-24 py-32 lg:py-32">
      <div>
        <h3>{{ title }}</h3>

        <div
          v-if="description"
          class="prose   text-blue-dark/60"
        >
          {{ description }}
        </div>
      </div>

      <p
        class="font-bold"
      >
        <span class="text-12 text-blue-dark/50 md:text-13 lg:text-14">{{ location }}</span>
      </p>

      <TheLink
        v-if="link"
        :class="{'absolute bottom-28 right-16 group-hover:opacity-100 group-focus:opacity-100 md:-mb-4 md:translate-y-12 md:opacity-0 md:transition-transform-opacity group-hover:md:translate-y-0 group-focus:md:translate-y-0 lg:bottom-28 lg:right-32 lg:translate-y-16': location}"
        variant="info"
        :link="link"
        :text="linkLabel"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: Object,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  linkLabel: {
    type: String,
    required: true
  },
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  },
  location: {
    type: Object,
    required: true
  }
})
function getDate (date: string) {
  const [calendar, time] = date.split('T')
  const [year, month, day] = calendar.split('-')
  const monthName = new Date(~~year, ~~month - 1, ~~day).toLocaleString('default', { month: 'short' })
  // return calendar
  return `${day} ${monthName.toLocaleUpperCase()}`
}

</script>
