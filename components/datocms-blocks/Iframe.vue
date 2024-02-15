// eslint-disable-next-line vue/multi-word-component-names
<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="true"
    class="!pt-96"
  >
    <div class="iframe-wrapper aspect-[3/3.5] w-full sm:aspect-video">
      <Teleport :disabled="!fullscreen" to="#overlay">
        <div
          class="iframe-container size-full rounded-6 bg-white"
          :class="{
            'size-screen fixed left-0 top-0': fullscreen,
            'relative': !fullscreen
          }"
        >
          <div v-if="!loaded" class="absolute left-0 top-0 flex size-full flex-col items-center justify-center rounded-6 border-2 border-gray/60 bg-white">
            <h4 class="mb-4">
              Looks like something went wrong
            </h4>
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
            class="absolute left-0 top-0 z-50 size-full rounded-6 shadow"
            :src="data.iframe"
            @load="triggerLoad"
          />
          <transition name="fade" mode="out-in">
            <button
              v-if="loaded"
              class="iframe-button grid-row-2 z-[999] grid size-32 cursor-pointer grid-cols-2 rounded-full border-1 border-gray bg-white p-4 shadow-banner"
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
          </transition>
        </div>
      </Teleport>
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
const loaded = ref(false)
const triggerLoad = () => {
  setTimeout(() => {
    loaded.value = true
  }, 1000)
}
const fullscreen = ref(false)
</script>

<style scoped>
@media (width < 640px) {
  .iframe-wrapper {
    @apply !px-16
  }

}
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
@container (width < 550px) {
  .iframe-button {
    @apply !bottom-72
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
