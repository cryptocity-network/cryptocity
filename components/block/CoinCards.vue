<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :no-padding-bottom="false"
    :overlaps-next-section="true"
    class="relative !mt-0 !bg-white !py-0"
  >
    <div class="widest relative overflow-hidden">
      <div class="absolute left-0 top-0 !m-0 h-[85%] w-screen bg-gray !p-0" />
      <ul
        ref="scroller"
        role="list"
        class="relative flex w-full items-stretch justify-start gap-16 overflow-x-auto !px-32 pb-64 pt-6 md:flex-col md:items-start md:justify-center md:pb-40 xl:flex-row "
      >
        <li
          v-for="(currency, x) in region?.supportedCryptocurrencies"
          :key="x"
          ref="slides"
          data-location
          class="block max-w-screen-xs shrink-0 snap-center snap-always rounded-8 bg-white shadow md:flex md:w-full md:max-w-none md:shrink xl:block xl:max-w-[400px]"
        >
          <div class="relative mx-6 mt-6 flex items-center rounded-6 bg-gray p-56 md:mb-6 md:mr-0 md:w-1/2 xl:mb-0 xl:mr-6 xl:w-auto ">
            <DatoImage :image="currency.labelledIcon" class="mx-auto h-160 object-center" />
          </div>
          <div class="grid w-full grid-cols-1 grid-rows-2">
            <div
              v-for="(benefit, j) in currency.benefits"
              :key="benefit.description"
              class="flex flex-col items-center justify-center border-gray p-24"
              :class="{
                'border-t-2': j === 1
              }"
            >
              <DatoImage :image="benefit.icon" class="h-32" />
              <div class="mt-12 text-center text-14 text-blue-dark/60">
                {{ benefit.description }}
              </div>
              <!-- <div
                v-if="description.comingSoon"
                class="mt-12 rounded-full border-2 border-blue-dark/10 px-8 py-4 text-12 font-bold text-blue-dark/40"
              >
                COMING SOON
              </div> -->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useWebsiteStore } from '~/store/store'

const { region } = storeToRefs(useWebsiteStore())

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
