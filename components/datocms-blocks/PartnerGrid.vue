<template>
  <section
    class="pb-160 pt-80"
  >
    <ul
      v-if="data"
      class="mx-auto grid max-w-screen-2xl grid-cols-1 place-items-center items-stretch justify-items-stretch md:grid-cols-2"
      :class="[
        {
          'justify-center': data.grid.length === 1,
          'divide-x-2 divide-blue-dark/10': data.grid.length <= 2,
        },
      ]"
    >
      <Partner
        v-for="(item, i) in data.grid"
        :key="i"
        :description="item.description"
        :logo="item.logo.url"
        :headline-logo="item.url"
        :headline="item.headline"
        :label="item.label"
        :link-label="item.linkLabel"
        :link-href="item.linkUrl"
        :twitter="item.twitter"
        :facebook="item.facebook"
        :instagram="item.instagram"
        :linkedin="item.linkedIn"
        :telegram="item.telegram"
        :email="item.email"
        :youtube="item.youtube"
        :discord="item.discord"
        :whatsapp="item.whatsapp"
        :badge="item.badge"
        :center="data.grid.length === 1"
        :class="{
          'md:border-r-2 md:border-blue-dark/10': data.grid.length > 1 && i % 2 === 0,
          'md:!border-b-2 md:border-blue-dark/10': i < data.grid.length - 2,
          'border-t-2 border-blue-dark/10 md:border-t-0': i > 0,
        }"
      />
    </ul>
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
