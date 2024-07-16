<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="hero"
  >
    <div class="flex flex-col">
      <div
        class="think-features mx-auto h-[275px] w-full grow overflow-y-auto p-64 py-0"
        :class="[`highlight-${highlightedCurrency}`]"
      >
        <!-- eslint-disable max-len -->

        <svg
          class="circle circle-nimiq"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" rx="40" fill="#E9B213" />
          <path d="M62.3156 38.0812L52.6246 21.0745C51.9266 19.858 50.6483 19.1128 49.2657 19.1128H29.8836C29.1982 19.116 28.5261 19.2996 27.9368 19.6444C27.3475 19.9893 26.8624 20.483 26.5315 21.0745L16.8405 38.0812C16.5005 38.6809 16.322 39.3565 16.322 40.0435C16.322 40.7305 16.5005 41.406 16.8405 42.0058L26.5315 59.0113C26.8624 59.6028 27.3475 60.0965 27.9368 60.4414C28.5261 60.7863 29.1982 60.9699 29.8836 60.9731H49.2657C49.9511 60.9699 50.6232 60.7863 51.2126 60.4414C51.8019 60.0965 52.287 59.6028 52.6178 59.0113L62.3089 42.0058C62.6514 41.4071 62.832 40.7317 62.8332 40.0444C62.8344 39.3571 62.6561 38.681 62.3156 38.0812Z" fill="white" />
        </svg>
        <svg
          class="circle circle-bitcoin"
          width="99"
          height="80"
          viewBox="0 0 99 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M78.8034 49.6743C73.4604 71.1073 51.7534 84.1443 30.3184 78.8023C8.89441 73.4593 -4.14759 51.7543 1.19841 30.3273C6.53841 8.89528 28.2434 -4.14572 49.6714 1.19728C71.1034 6.53928 84.1464 28.2463 78.8034 49.6743Z" fill="#F7931A" />
          <path d="M59.1562 33.5813C59.9883 28.2893 55.7523 25.4443 49.9593 23.5463L51.8392 16.3763L47.2513 15.2893L45.4212 22.2693C44.2002 21.9833 42.9753 21.7093 41.7473 21.4463L43.5903 14.4203L39.0033 13.3323L37.1243 20.4993C36.1263 20.2833 35.1463 20.0693 34.1953 19.8443L34.2002 19.8223L27.8743 18.3193L26.6543 22.9803C26.6543 22.9803 30.0573 23.7223 29.9853 23.7683C31.8433 24.2093 32.1793 25.3783 32.1233 26.3063L29.9833 34.4743C30.1113 34.5043 30.2763 34.5513 30.4593 34.6193L29.9753 34.5053L26.9753 45.9463C26.7473 46.4833 26.1713 47.2893 24.8713 46.9833C24.9183 47.0463 21.5383 46.1913 21.5383 46.1913L19.2603 51.1883L25.2303 52.6053C26.3403 52.8693 27.4303 53.1463 28.5003 53.4073L26.6022 60.6583L31.1852 61.7463L33.0633 54.5703C34.3153 54.8953 35.5303 55.1923 36.7193 55.4743L34.8463 62.6153L39.4323 63.7023L41.3323 56.4653C49.1553 57.8733 55.0373 57.3053 57.5133 50.5753C59.5083 45.1563 57.4143 42.0303 53.2983 39.9903C56.2953 39.3313 58.5533 37.4563 59.1562 33.5813ZM48.6733 47.5623C47.2553 52.9823 37.6633 50.0533 34.5533 49.3173L37.0732 39.7103C40.1822 40.4503 50.1543 41.9123 48.6733 47.5623ZM50.0913 33.5043C48.7983 38.4333 40.8143 35.9283 38.2253 35.3143L40.5093 26.6013C43.0993 27.2153 51.4393 28.3623 50.0913 33.5043Z" fill="white" />
          <path d="M81.4912 79.9993C91.1562 79.9993 98.9912 72.1643 98.9912 62.4993C98.9912 52.8343 91.1562 44.9993 81.4912 44.9993C71.8262 44.9993 63.9912 52.8343 63.9912 62.4993C63.9912 72.1643 71.8262 79.9993 81.4912 79.9993Z" fill="#7B1AF7" />
          <path d="M73.8922 62.8762L85.5592 52.8232C86.0672 52.4982 86.5522 52.8232 86.2422 53.3822L82.5182 60.7042H89.1582C89.1582 60.7042 90.2132 60.7042 89.1582 61.5732L77.6782 71.6892C76.8712 72.3712 76.3132 71.9992 76.8712 70.9442L80.4702 63.8072H73.8922C73.8922 63.8072 72.8372 63.8072 73.8922 62.8762Z" fill="white" />
        </svg>

        <svg
          class="circle circle-tether"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" rx="40" fill="#009393" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56.4695 24.0063V30.1925H44.0823V34.4815C52.7822 34.9399 59.3094 36.8223 59.3579 39.0786L59.3576 43.7825C59.3091 46.0388 52.7822 47.9212 44.0823 48.3796V58.9053H35.857V48.3796C27.1571 47.9212 20.6299 46.0388 20.5815 43.7825L20.5817 39.0786C20.6302 36.8223 27.1571 34.9399 35.857 34.4815V30.1925H23.4698V24.0063H56.4695ZM39.9697 45.1481C49.254 45.1481 57.0142 43.5563 58.9132 41.4306C57.3028 39.628 51.4776 38.2093 44.0823 37.8196V42.3103C42.7569 42.3801 41.3808 42.4169 39.9697 42.4169C38.5585 42.4169 37.1826 42.3801 35.857 42.3103V37.8196C28.4617 38.2093 22.6365 39.628 21.026 41.4306C22.9251 43.5563 30.6853 45.1481 39.9697 45.1481Z" fill="white" />
        </svg>
        <Transition mode="out-in" name="fade">
          <div :key="highlightedCurrency" class="absolute left-1/2 top-[5.7rem] w-[86px] translate-x-[calc(-50%-6px)] rounded-full border-2 border-white bg-blue-dark text-center text-15 font-bold uppercase text-white">
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
const currencies = [
  'nimiq',
  'bitcoin',
  'tether'
]
let currentCurrencyIndex = 0
const highlightedCurrency = ref('nimiq')

onMounted(() => {
  setInterval(function () {
    ++currentCurrencyIndex
    if (currentCurrencyIndex >= currencies.length) {
      currentCurrencyIndex = 0
    }
    highlightedCurrency.value = currencies[currentCurrencyIndex]
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

        &.highlight-nimiq {
            .circle-nimiq {
              /* ACTIVE */
              transform: translate3d(-7px, -80px, 0) scale(1.1);
            }

            .circle-bitcoin {
              /* BOttom left */
                transform: translate3d(-60px, 10px, 0) scale(0.72);
            }

            .circle-tether {
              /* Bottom Right */
              transform: translate3d(40px, 29px, 0) scale(0.86);
            }

            .attribute-nimiq {
                opacity: 1;
            }
        }

        &.highlight-bitcoin {
            .circle-nimiq {
              /* Bottom Right */
              transform: translate3d(40px, 29px, 0) scale(0.86);
            }

            .circle-bitcoin {
              /* ACTIVE */
              transform: translate3d(-7px, -80px, 0) scale(1.2);
            }

            .circle-tether {
              /* BOttom left */
                transform: translate3d(-60px, 10px, 0) scale(0.62);
            }

            .attribute-bitcoin {
                opacity: 1;
            }
        }

        &.highlight-tether {
            .circle-nimiq {
              /* BOttom left */
                transform: translate3d(-60px, 10px, 0) scale(0.62);
            }

            .circle-bitcoin {
              /* Bottom Right */
              transform: translate3d(40px, 29px, 0) scale(1);
            }

            .circle-tether {
              /* ACTIVE */
              transform: translate3d(-7px, -80px, 0) scale(1.1);
            }

            .attribute-tether {
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
