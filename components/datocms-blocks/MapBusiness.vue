<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="index === 0 ? 136 : 240"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    :class="{'title': index !== 0}"
  >
    <div class="mx-auto max-w-screen-2xl px-64">
      <HeadlineSection
        :label="data.headline.label"
        :headline="data.headline.headline"
        :subline="data.headline.subline"
      />
      <div class="mt-96 flex justify-center">
        <a
          :href="data.joinLink"
          class="group relative flex h-full w-[clamp(320px,370px,80vw)] cursor-pointer flex-col rounded-6 border-1 border-gray bg-[#e9e9eb] p-6 pb-0 transition-all will-change-transform hover:-translate-y-6 hover:bg-white hover:shadow"
        >
          <div class="relative h-240 overflow-hidden rounded-4 bg-blue/20">
            <svg class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="51" height="51" fill="none"><g stroke="#1F2348" stroke-width="1.5" opacity=".3"><path stroke-linecap="round" d="M25.5 13.5v24M37.5 25.5h-24" /><rect width="48" height="48" x="1.5" y="1.5" rx="24" /></g></svg>
          </div>

          <div v-if="data.joinCardTitle" class="flex grow flex-col justify-between gap-24 p-24 pt-32 lg:py-32">
            <div>
              <h3 class="text-22">
                {{ data.joinCardTitle }}
              </h3>
              <div
                v-if="data.joinCardDescription"
                class="mt-18 text-blue-dark/60"
              >
                {{ data.joinCardDescription }}
              </div>
            </div>

            <div class="relative">
              <p
                v-if="data.joinLinkLabel"
                class="text-12 font-bold uppercase !text-blue-light sm:text-13 lg:text-14"
                :class="{'transition-[opacity,transform] group-hover:-translate-y-1/2 group-hover:opacity-0': data.joinLinkLabel}"
              >
                {{ data.joinLinkLabel }}
              </p>
              <div
                v-if="data.joinLinkLabel"
                class="absolute left-0 top-1/2 flex items-center gap-8 !py-0 !text-blue-light opacity-0 transition-transform-opacity group-hover:-translate-y-1/2 group-hover:opacity-100"
              >
                <span class="text-12 font-bold uppercase  sm:text-13 lg:text-14">
                  {{ data.joinLinkLabel }}
                </span>
                <Arrow
                  class="h-auto w-12 shrink-0 -rotate-45"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import Arrow from '@/static/icons/arrow.svg'

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
