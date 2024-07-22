// eslint-disable-next-line vue/multi-word-component-names
<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="true"
    class="!pt-96"
  >
    <div class="iframe-wrapper  aspect-[3/3.5] w-full sm:aspect-video">
      <Teleport :disabled="!fullscreen" to="#overlay">
        <div
          class="iframe-container relative size-full overflow-hidden bg-white shadow"
          :class="{
            'size-screen fixed left-0 top-0': fullscreen,
            'relative rounded-6': !fullscreen
          }"
        >
          <!-- <div v-if="!loaded" class="absolute left-0 top-0 flex size-full flex-col items-center justify-center rounded-6 border-2 border-gray/60 bg-white">
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
          </div> -->
          <LoadingState v-if="!loaded" class="absolute-center scale-75" />
          <iframe
            v-if="data.iframe"
            class="absolute left-0 top-0 z-50 size-full"
            :class="{ 'rounded-6': !fullscreen }"
            :src="data.iframe"
            loading="lazy"
            @load="triggerLoad"
          />
          <Transition name="fade" mode="out-in">
            <div
              v-if="mapOverlayVisible"
              class="group absolute left-0 top-0 z-[60] flex size-full cursor-pointer flex-col items-center justify-center bg-blue/90 text-white transition-colors hover:bg-blue/80"
              @click="mapOverlayVisible = false"
            >
              <div class="size-fit transition-transform group-hover:scale-105">
                <h3 class="text-white">
                  {{ $t('View locations in') }} <span class="capitalize">{{ cityName }}</span>
                </h3>
                <TheLink variant="info" :text="$t('Open Map')" hide-arrow class="mx-auto mt-16" />
              </div>
            </div>
          </Transition>
          <transition name="fade" mode="out-in">
            <button
              v-if="loaded"
              class="iframe-button grid-row-2 right-24 z-50 grid size-32 cursor-pointer grid-cols-2 rounded-full border-1 border-gray bg-white p-4 shadow-banner"
              :class="{
                'absolute top-24': !fullscreen,
                'fixed !top-104 z-[999] md:!top-24': fullscreen
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
  cityName: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})
const loaded = ref(false)
const mapOverlayVisible = ref(true)
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

@container (width < 768px) {
  .iframe-button {
    @apply !top-104
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
