// eslint-disable-next-line vue/multi-word-component-names
<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="true"
    class="!pt-96"
  >
    <div class="aspect-video w-full">
      <div class="iframe-container relative size-full">
        <div class="absolute left-0 top-0 flex size-full flex-col items-center justify-center rounded-6 border-2 border-blue-dark/60">
          <h3 class="mb-4">
            Looks like something went wrong
          </h3>
          <p class="mb-20">
            Click here to see the map
          </p>
          <TheLink
            :url="data.iframe"
            :is-external="true"
            variant="info"
            text="View Map"
          />
        </div>
        <iframe
          v-if="data.iframe"
          class="left-0 top-0 z-50 size-full rounded-6 shadow"
          :src="data.iframe"
          :class="{
            'size-screen fixed': fullscreen,
            'absolute': !fullscreen
          }"
        />
        <button
          class="iframe-button grid-row-2 z-50 grid size-32 cursor-pointer grid-cols-2 rounded-full bg-white p-4 shadow"
          :class="{
            'absolute': !fullscreen,
            'fixed bottom-120 right-24 z-[999] md:bottom-200': fullscreen
          }"
          @click="fullscreen = !fullscreen"
        >
          <ArrowExternal
            class="col-start-2 m-1 w-6 self-end "
            :class="{
              'rotate-180': fullscreen
            }"
          />
          <ArrowExternal
            class=" m-1 w-6 self-start justify-self-end"
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
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})

const fullscreen = ref(false)
</script>

<style scoped>

.iframe-container {
  container-type: inline-size;
}
.iframe-button {
  @apply right-24 bottom-200
}
@container (width < 768px) {
  .iframe-button {
    @apply !bottom-120
  }
}
</style>
