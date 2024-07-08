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
        class="relative flex w-full items-stretch justify-start gap-16 overflow-x-auto !px-32 pb-20 pt-6 md:flex-col md:items-start md:justify-center md:pb-40 xl:flex-row "
      >
        <li
          v-for="(coinData, x) in data"
          :key="x"
          ref="slides"
          data-location
          class="block max-w-screen-xs shrink-0 snap-center snap-always rounded-8 bg-white shadow md:flex md:w-full md:max-w-none md:shrink xl:block xl:max-w-[400px]"
        >
          <!-- :class="x === '2' ? 'h-[560px]' : 'h-[530px]'" -->
          <!-- <Location class="h-104" /> -->
          <!-- <div class="relative h-auto grow overflow-hidden rounded-4"> -->
          <!-- <img class="h-full object-fill" src="/static/map-business-background.png" alt=""> -->
          <div class="relative mx-6 mt-6 flex items-center rounded-6 bg-gray p-56 md:mb-6 md:mr-0 md:w-1/2 xl:mb-0 xl:mr-6 xl:w-auto ">
            <DatoImage :image="coinData.coinImage" class="mx-auto h-160 object-center" />
          </div>
          <div class="grid w-full grid-cols-1 grid-rows-[min-content,min-content,min-content] 2xl:grid-cols-2 2xl:grid-rows-[min-content,min-content]">
            <div
              v-for="(description, j) in coinData.coinDescriptions"
              :key="description.id"
              class="flex flex-col items-center justify-center border-gray p-24 "
              :class="{
                'border-t-2 2xl:border-t-0': j === 1,
                'border-t-2 2xl:col-span-2': j == 2,
                '2xl:border-r-2': j == 0
              }"
            >
              <DatoImage :image="description.icon" />
              <div class="mt-12 text-center text-14 text-blue-dark/60">
                {{ description.text }}
              </div>
              <div
                v-if="description.comingSoon"
                class="mt-12 rounded-full border-2 border-blue-dark/10 px-8 py-4 text-12 font-bold text-blue-dark/40"
              >
                COMING SOON
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
const props = defineProps({
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

onMounted(() => {
  console.log(props.data)
})
</script>
