<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="hero"
  >
    <div class="flex flex-col">
      <div
        class="think-features mx-auto h-[275px] w-full grow p-64 py-0"
        :class="[`highlight-${currentCurrencyIndex}`]"
      >
        <div v-for="(crypto, num) in region?.supportedCryptocurrencies" :key="crypto.abbreviation">
          <img class="circle size-[78px]" :class="`circle-${num}`" :src="crypto.icon?.url" :alt="crypto.fullName">
        </div>

        <Transition mode="out-in" name="fade">
          <div :key="highlightedCurrency" class="absolute left-1/2 top-[5.7rem] min-w-[96px] translate-x-[calc(-50%-6px)] rounded-full border-2 border-white bg-blue-dark text-center text-15 font-bold uppercase text-white">
            {{ highlightedCurrency }}
          </div>
        </Transition>
      </div>
      <div class="mx-auto -mt-40 max-w-screen-2xl">
        <HeadlineSection
          :label="data.label"
          :headline="data.headline"
          :subline="data.subline"
          :link="data.simpleLink"
          :has-link="data.hasLink"
          tag="h1"
        />
      </div>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '@/store/store'

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
let currencies = [
  '0',
  '1',
  '2'
]

const currentCurrencyIndex = ref(0)
const highlightedCurrency = ref('BITCOIN')

onMounted(() => {
  if (region?.value?.supportedCryptocurrencies) {
    highlightedCurrency.value = region?.value?.supportedCryptocurrencies?.[0]?.fullName
    currencies = region?.value?.supportedCryptocurrencies?.map(crypto => crypto.fullName)
  }
  setInterval(function () {
    currentCurrencyIndex.value++
    if (currentCurrencyIndex.value >= currencies.length) {
      currentCurrencyIndex.value = 0
    }
    highlightedCurrency.value = currencies[currentCurrencyIndex.value]
  }, 2000)
})
</script>

<style>
.fade-enter-active {
  transition: opacity 0.3s 0.35s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.think-features {
    position: relative;

        .circle {
            position: absolute;

            left: 50%;
            top: 50%;

            width: 6.25rem;
            height: 6.25rem;
            margin-left: -3.125rem;
            margin-top: -3.125rem;

            transition: transform 1s cubic-bezier(0.83, 0, 0.17, 1),
                opacity 0.5s ease;
        }

        .attribute {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            margin-bottom: 4rem;
            transition: opacity 0.75s 0.25s ease;
            opacity: 0;
        }

        &.highlight-0 {
            .circle-0 {
              /* ACTIVE */
              transform: translate3d(-7px, -80px, 0) scale(1.1);
            }

            .circle-1 {
              /* BOttom left */
                transform: translate3d(-60px, 10px, 0) scale(0.72);
            }

            .circle-2 {
              /* Bottom Right */
              transform: translate3d(40px, 29px, 0) scale(0.86);
            }

            .attribute-0 {
                opacity: 1;
            }
        }

        &.highlight-1 {
            .circle-0 {
              /* Bottom Right */
              transform: translate3d(40px, 29px, 0) scale(0.86);
            }

            .circle-1 {
              /* ACTIVE */
              transform: translate3d(-7px, -80px, 0) scale(1.2);
            }

            .circle-2 {
              /* BOttom left */
                transform: translate3d(-60px, 10px, 0) scale(0.62);
            }

            .attribute-1 {
                opacity: 1;
            }
        }

        &.highlight-2 {
            .circle-0 {
              /* BOttom left */
                transform: translate3d(-60px, 10px, 0) scale(0.62);
            }

            .circle-1 {
              /* Bottom Right */
              transform: translate3d(40px, 29px, 0) scale(1);
            }

            .circle-2 {
              /* ACTIVE */
              transform: translate3d(-7px, -80px, 0) scale(1.1);
            }

            .attribute-2 {
                opacity: 1;
            }
        }

        &.fade-out {
            .circle {
                transform: translate3d(0, 0, 0) scale(0);
                opacity: 0;

                transition-delay: 0s;
            }

            .attribute {
                opacity: 0;
            }
        }
}
</style>
