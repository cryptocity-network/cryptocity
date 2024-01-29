// eslint-disable-next-line vue/multi-word-component-names
<template>
  <BlockWrapper
    :block-background-color="data.settings.backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div class="aspect-video w-full">
      <div class="relative size-full">
        <iframe
          v-if="data.iframe"
          class="size-full rounded-6 shadow"
          :src="data.iframe"
          :class="{
            'size-screen fixed left-0 top-0': fullscreen
          }"
        />
        <button
          class="grid-row-2 grid size-48 cursor-pointer grid-cols-2 rounded-full bg-white p-4 shadow"
          :class="{
            'absolute right-24 top-24': !fullscreen,
            'fixed right-24 top-24 z-[999]': fullscreen
          }"
          @click="fullscreen = !fullscreen"
        >
          <ArrowExternal
            class="col-start-2 m-2 w-12 self-end "
            :class="{
              'rotate-180': fullscreen
            }"
          />
          <ArrowExternal
            class=" m-2 w-12 self-start justify-self-end"
            :class="{
              'rotate-180': !fullscreen
            }"
          />
        </button>
      </div>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import ArrowExternal from '~/static/icons/arrow-external.svg'

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

const fullscreen = ref(false)
</script>
