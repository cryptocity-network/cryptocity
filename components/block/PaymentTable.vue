<template>
  <BlockWrapper
    :block-background-color="'gray'"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="overflow-x-auto px-16 !pt-120"
  >
    <table
      class="merchants-table"
      :style="`--cols: ${paymentOptions.length}; --rows: ${Object.keys(paymentOptions[0]).length - 2};`"
    >
      <div class="test" />
      <tr>
        <th />
        <th v-for="item in paymentOptions" :key="item.id">
          <DatoImage
            v-if="item.logo"
            :image="item.logo"
            :priority="true"
            class=""
          />
        </th>
      </tr>
      <tr>
        <td>{{ axisData.acceptedCryptoCurrencies }}</td>
        <td v-for="item in paymentOptions" :key="item.id">
          <div class="flex gap-4">
            <svg
              v-if="item.acceptedCrypto.includes('btc')"
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.7009 12.4182C18.3651 17.7763 12.9386 21.0356 7.5798 19.7C2.22385 18.3644 -1.03685 12.9382 0.299556 7.58139C1.63471 2.22332 7.06099 -1.03696 12.4179 0.298653C17.776 1.63426 21.0364 7.06108 19.7006 12.4182H19.7009Z" fill="#F7931A" />
              <path d="M14.7893 8.39502C14.9973 7.07187 13.9383 6.36058 12.4902 5.88608L12.96 4.09371L11.8131 3.82181L11.3558 5.56694C11.0503 5.49554 10.7441 5.42697 10.4372 5.36123L10.8978 3.6046L9.75122 3.3327L9.28149 5.12445C9.03193 5.07038 8.78693 5.01693 8.54912 4.96069L8.55043 4.95509L6.96876 4.5794L6.66366 5.74469C6.66366 5.74469 7.5146 5.9302 7.49663 5.9417C7.96114 6.05201 8.04509 6.34442 8.03105 6.57624L7.49598 8.61813C7.52799 8.6259 7.56948 8.6374 7.61521 8.65449L7.49402 8.6259L6.74402 11.4863C6.68718 11.6205 6.54312 11.8219 6.2181 11.7454C6.22986 11.7613 5.38479 11.5475 5.38479 11.5475L4.81543 12.7967L6.30793 13.1509C6.58559 13.2168 6.85769 13.2861 7.12555 13.3514L6.65092 15.1642L7.79651 15.4361L8.26624 13.6422C8.57918 13.7233 8.88297 13.7976 9.18023 13.8681L8.7118 15.6534L9.85837 15.9253L10.3333 14.1158C12.289 14.4679 13.7596 14.3259 14.3787 12.6435C14.8775 11.2887 14.3538 10.5071 13.3249 9.99721C14.0742 9.83251 14.6387 9.3636 14.7893 8.39502ZM12.1685 11.8903C11.8141 13.2451 9.41607 12.513 8.63863 12.329L9.26842 9.92729C10.0459 10.1122 12.5389 10.4776 12.1685 11.8903ZM12.5232 8.37575C12.1998 9.60785 10.204 8.9817 9.55654 8.82819L10.1275 6.64988C10.775 6.80339 12.86 7.0899 12.5232 8.37544V8.37575Z" fill="white" />
              <path d="M20.3731 19.9993C22.7893 19.9993 24.7481 18.0406 24.7481 15.6243C24.7481 13.2081 22.7893 11.2493 20.3731 11.2493C17.9568 11.2493 15.998 13.2081 15.998 15.6243C15.998 18.0406 17.9568 19.9993 20.3731 19.9993Z" fill="#7B1AF7" />
              <path d="M18.4734 15.7187L21.3901 13.2054C21.5172 13.124 21.6383 13.2054 21.5608 13.3451L20.6299 15.1757H22.2899C22.2899 15.1757 22.5537 15.1757 22.2899 15.3929L19.4198 17.9218C19.2181 18.0924 19.0785 17.9993 19.2181 17.7356L20.1179 15.9515H18.4734C18.4734 15.9515 18.2097 15.9515 18.4734 15.7187Z" fill="white" />
            </svg>
            <svg
              v-if="item.acceptedCrypto.includes('nim')"
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.8521 8.15608L15.6849 0.843215C15.3848 0.320088 14.8351 -0.000335693 14.2406 -0.000335693H5.90624C5.61152 0.00104975 5.32252 0.0799746 5.06911 0.228275C4.8157 0.376575 4.60709 0.588866 4.46483 0.843215L0.297654 8.15608C0.151459 8.41398 0.074707 8.70447 0.074707 8.99988C0.074707 9.29528 0.151459 9.58577 0.297654 9.84367L4.46483 17.156C4.60709 17.4104 4.8157 17.6227 5.06911 17.771C5.32252 17.9193 5.61152 17.9982 5.90624 17.9996H14.2406C14.5353 17.9982 14.8243 17.9193 15.0777 17.771C15.3311 17.6227 15.5398 17.4104 15.682 17.156L19.8492 9.84367C19.9965 9.58623 20.0741 9.29578 20.0746 9.00025C20.0752 8.70471 19.9985 8.414 19.8521 8.15608Z" fill="url(#paint0_radial_1002_9705)" />
              <defs>
                <radialGradient
                  id="paint0_radial_1002_9705"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(20.0746 17.9996) rotate(-180) scale(19.9999 17.9999)"
                >
                  <stop stop-color="#EC991C" />
                  <stop offset="1" stop-color="#E9B213" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              v-if="item.acceptedCrypto.includes('usdt')"
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.92176 0.95282L16.7188 0.95282C17.0003 0.95282 17.2603 1.1034 17.4007 1.3477L20.8376 7.32884C21.0158 7.63902 20.9629 8.03051 20.7087 8.28204L11.2484 17.6418C10.9419 17.945 10.4489 17.945 10.1425 17.6418L0.694966 8.29468C0.434828 8.03731 0.386116 7.63441 0.577409 7.32229L4.25124 1.32851C4.39432 1.09508 4.64821 0.95282 4.92176 0.95282ZM15.1956 3.62319L15.1956 5.30142L11.8351 5.30142L11.8351 6.46498C14.1953 6.58933 15.966 7.10001 15.9792 7.71213L15.9791 8.98823C15.9659 9.60035 14.1953 10.111 11.8351 10.2354L11.8351 13.0909L9.60365 13.0909L9.60365 10.2354C7.24345 10.111 5.47269 9.60035 5.45959 8.98823L5.45963 7.71212C5.47278 7.10001 7.24345 6.58933 9.60365 6.46498L9.60365 5.30142L6.24315 5.30142L6.24315 3.62319L15.1956 3.62319ZM10.7194 9.35871C13.2381 9.35871 15.3433 8.92688 15.8585 8.3502C15.4216 7.86117 13.8413 7.47628 11.8351 7.37057L11.8351 8.58884C11.4755 8.60778 11.1022 8.61776 10.7194 8.61776C10.3365 8.61776 9.96325 8.60778 9.60365 8.58884L9.60365 7.37057C7.59739 7.47628 6.01707 7.86117 5.58017 8.3502C6.09537 8.92688 8.20062 9.35871 10.7194 9.35871Z" fill="#009393" />
            </svg>
            <svg
              v-if="item.acceptedCrypto.includes('usdc')"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3052_13811)">
                <path d="M10.5 21C16.3188 21 21 16.3188 21 10.5C21 4.68122 16.3188 0 10.5 0C4.68122 0 0 4.68122 0 10.5C0 16.3188 4.68122 21 10.5 21Z" fill="#2775CA" />
                <path d="M13.3879 12.1629C13.3879 10.6317 12.4691 10.1067 10.6316 9.88796C9.31911 9.71293 9.05661 9.36296 9.05661 8.75039C9.05661 8.13782 9.49414 7.74418 10.3691 7.74418C11.1566 7.74418 11.5941 8.00668 11.8129 8.66293C11.8566 8.79418 11.9879 8.88164 12.1191 8.88164H12.8191C12.9941 8.88164 13.1254 8.75039 13.1254 8.57546V8.53168C12.9503 7.56914 12.1628 6.82543 11.1566 6.73796V5.68796C11.1566 5.51293 11.0254 5.38168 10.8066 5.33789H10.1504C9.97536 5.33789 9.84411 5.46914 9.80032 5.68796V6.69418C8.48782 6.86921 7.65664 7.74418 7.65664 8.83796C7.65664 10.2817 8.53161 10.8504 10.3691 11.0692C11.5941 11.2879 11.9879 11.5504 11.9879 12.2505C11.9879 12.9505 11.3753 13.4317 10.5441 13.4317C9.40657 13.4317 9.01282 12.9504 8.88157 12.2941C8.83789 12.1192 8.70664 12.0316 8.57539 12.0316H7.83157C7.65664 12.0316 7.52539 12.1629 7.52539 12.3379V12.3817C7.70032 13.4754 8.40036 14.2629 9.84411 14.4817V15.5317C9.84411 15.7066 9.97536 15.8379 10.1941 15.8817H10.8503C11.0254 15.8817 11.1566 15.7504 11.2004 15.5317V14.4817C12.5129 14.2629 13.3879 13.3441 13.3879 12.1629Z" fill="white" />
                <path d="M8.26863 16.7562C4.85613 15.5312 3.10609 11.725 4.37491 8.35618C5.03116 6.51868 6.47491 5.11871 8.26863 4.46246C8.44366 4.375 8.53113 4.24375 8.53113 4.02493V3.41246C8.53113 3.23743 8.44366 3.10618 8.26863 3.0625C8.22484 3.0625 8.13738 3.0625 8.09359 3.10618C3.93738 4.41868 1.66234 8.8375 2.97484 12.9937C3.76234 15.4437 5.64363 17.325 8.09359 18.1125C8.26863 18.1999 8.44366 18.1125 8.48734 17.9374C8.53113 17.8937 8.53113 17.85 8.53113 17.7625V17.1499C8.53113 17.0187 8.39988 16.8437 8.26863 16.7562ZM12.9062 3.10618C12.7311 3.01871 12.5561 3.10618 12.5124 3.28121C12.4686 3.325 12.4686 3.36868 12.4686 3.45625V4.06871C12.4686 4.24375 12.5999 4.41868 12.7311 4.50625C16.1436 5.73118 17.8937 9.53743 16.6248 12.9062C15.9686 14.7437 14.5248 16.1437 12.7311 16.8C12.5561 16.8874 12.4686 17.0187 12.4686 17.2375V17.85C12.4686 18.025 12.5561 18.1562 12.7311 18.1999C12.7749 18.1999 12.8624 18.1999 12.9062 18.1562C17.0624 16.8437 19.3374 12.4249 18.0249 8.26871C17.2374 5.77496 15.3123 3.89368 12.9062 3.10618Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_3052_13811">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              v-if="item.acceptedCrypto.includes('bitcoin')"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3052_13820)">
                <path d="M20.6858 13.0415C19.2833 18.6672 13.5854 22.0908 7.95905 20.688C2.33505 19.2855 -1.08863 13.5872 0.314495 7.96197C1.71639 2.33566 7.4143 -1.08828 13.0389 0.314231C18.6649 1.71674 22.0883 7.41562 20.6857 13.0416L20.6858 13.0415H20.6858Z" fill="#F7931A" />
                <path d="M15.1303 9.00477C15.3393 7.60729 14.2754 6.85609 12.8205 6.35497L13.2925 4.46196L12.1401 4.17483L11.6807 6.01799C11.3778 5.94244 11.0666 5.87124 10.7574 5.80067L11.2202 3.94534L10.0686 3.6582L9.59639 5.55059C9.3457 5.49352 9.09947 5.43711 8.86059 5.37767L8.86192 5.37171L7.27283 4.97489L6.9663 6.20565C6.9663 6.20565 7.82123 6.40162 7.80321 6.41369C8.26984 6.53015 8.35423 6.83905 8.34022 7.08389L7.8026 9.24047C7.83473 9.24863 7.87641 9.26043 7.9224 9.27891C7.88395 9.26937 7.84304 9.25895 7.8006 9.24878L7.04704 12.2698C6.99001 12.4116 6.84526 12.6244 6.51902 12.5436C6.53057 12.5603 5.68149 12.3346 5.68149 12.3346L5.10938 13.6536L6.60895 14.0274C6.88792 14.0974 7.1613 14.1706 7.43052 14.2394L6.95367 16.1541L8.10467 16.4413L8.57689 14.5469C8.89133 14.6323 9.19648 14.711 9.49522 14.7852L9.02458 16.6707L10.177 16.9578L10.6538 15.0467C12.6187 15.4186 14.0962 15.2686 14.7181 13.4913C15.2193 12.0604 14.6932 11.235 13.6594 10.6968C14.4124 10.5231 14.9795 10.0279 15.1307 9.00492L15.1303 9.00466L15.1303 9.00477ZM12.4975 12.6966C12.1414 14.1276 9.7321 13.3541 8.95098 13.1601L9.58376 10.6234C10.3648 10.8184 12.8697 11.2043 12.4975 12.6966H12.4975ZM12.8539 8.98403C12.529 10.2856 10.5237 9.62436 9.87325 9.46221L10.447 7.1616C11.0974 7.32375 13.1923 7.62638 12.854 8.98403H12.8539Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_3052_13820">
                  <rect width="21" height="21.0024" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <!-- {{ item.acceptedCryptoCurrencies }} -->
        </td>
      </tr>
      <tr>
        <td>{{ axisData.fees }}</td>
        <td v-for="item in paymentOptions" :key="item.id">
          {{ item.fees }}
        </td>
      </tr>
      <tr class="">
        <td class="relative !z-20 flex items-center gap-x-8">
          {{ axisData.nimiqPay }}
          <div class="group relative z-20">
            <svg
              class="cursor-pointer"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <rect
                  x="8"
                  y="10.4995"
                  width="1.5"
                  height="3.375"
                  rx="0.75"
                  transform="rotate(-180 8 10.4995)"
                  fill="#1F2348"
                />
                <rect
                  x="8"
                  y="5.99951"
                  width="1.5"
                  height="1.5"
                  rx="0.75"
                  transform="rotate(-180 8 5.99951)"
                  fill="#1F2348"
                />
                <path d="M7 1.49951C7.78793 1.49951 8.56815 1.65471 9.2961 1.95623C10.0241 2.25776 10.6855 2.69972 11.2426 3.25687C11.7998 3.81402 12.2417 4.47546 12.5433 5.20341C12.8448 5.93137 13 6.71158 13 7.49951C13 8.28744 12.8448 9.06766 12.5433 9.79561C12.2417 10.5236 11.7998 11.185 11.2426 11.7422C10.6855 12.2993 10.0241 12.7413 9.2961 13.0428C8.56815 13.3443 7.78793 13.4995 7 13.4995C6.21207 13.4995 5.43185 13.3443 4.7039 13.0428C3.97594 12.7413 3.31451 12.2993 2.75736 11.7422C2.20021 11.185 1.75825 10.5236 1.45672 9.79561C1.15519 9.06766 1 8.28744 1 7.49951C1 6.71158 1.1552 5.93136 1.45672 5.20341C1.75825 4.47545 2.20021 3.81402 2.75736 3.25687C3.31451 2.69972 3.97595 2.25776 4.7039 1.95623C5.43186 1.65471 6.21207 1.49951 7 1.49951L7 1.49951Z" stroke="#1F2348" stroke-width="1.5" stroke-linecap="round" />
              </g>
            </svg>
            <div
              class="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2"
            />
            <div class="pointer-events-none absolute left-32 top-1/2 z-20 -translate-y-1/2 rounded-4 bg-blue-dark p-16 text-white opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 ">
              <div
                class="absolute left-0 top-1/2 size-0 -translate-x-[99%] -translate-y-1/2  border-y-[10px] border-r-[10px]
                  border-y-transparent border-r-blue-dark
                  "
              />
              <p class="mb-12 text-16 font-semibold">
                Download the Nimiq pay app
              </p>
              <div class="flex justify-between gap-x-12">
                <nuxt-link to="https://apps.apple.com/us/app/nimiq-pay/id6471844738">
                  <AppleStore class="h-32 transition-transform hover:scale-105" />
                </nuxt-link>
                <nuxt-link to="https://play.google.com/store/apps/details?id=com.nimiq.pay">
                  <PlayStore class="h-32 transition-transform hover:scale-105" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </td>
        <td v-for="item in paymentOptions" :key="item.id" class="z-1">
          <svg
            v-if="item.nimiqPay"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="-0.000610352" width="21" height="21" rx="10.5" fill="url(#paint0_radial_830_5927)" />
            <path d="M6.03711 12.3369L8.66211 14.9619L14.6996 6.29944" stroke="white" stroke-width="1.575" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
              <radialGradient
                id="paint0_radial_830_5927"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(21 20.9994) rotate(-180) scale(21)"
              >
                <stop stop-color="#41A38E" />
                <stop offset="1" stop-color="#21BCA5" />
              </radialGradient>
            </defs>
          </svg>
        </td>
      </tr>
      <tr>
        <td>{{ axisData.releaseDate }}</td>
        <td v-for="item in paymentOptions" :key="item.id">
          {{ item.releaseDate }}
        </td>
      </tr>
      <tr>
        <td>{{ axisData.payment }}</td>
        <td v-for="item in paymentOptions" :key="item.id">
          {{ item.payment }}
        </td>
      </tr>
    </table>
    <div class="mx-auto mt-12 text-center text-12 text-blue-dark/60">
      {{ data.table.footnote }}
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>

import { useWebsiteStore } from '../../store/store'
import AppleStore from '@/assets/Apple-store-square.svg'
import PlayStore from '@/assets/Play-store-square.svg'
import type { PaymentOption } from '@/types/dato-models/PaymentOption'

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

const store = useWebsiteStore()

const paymentOptions = computed(() => {
  return store.region?.paymentOptions as Array<PaymentOption>
})

const axisData = computed(() => {
  return props.data.table.axis
})
</script>

<style>
.merchants-table {
  position: relative;

  .test {
    @apply bg-white shadow rounded-8;
    /* content: ''; */
    z-index: 0;
    position: absolute;
    left: calc(184px);
    top: calc(56px);
    width: calc(100% - 187px);
    height: calc(var(--rows)* 53px);

  }
  tr {
    position: relative;
    z-index: 10;
  }
  th, td {
    @apply relative z-10 whitespace-nowrap;
    font-size: 14px;
    padding: 16px;
    width: max-content;
    min-width: max-content;
    text-align: start;
  }

  th {
    @apply pr-48;
    img {
      @apply h-24 min-h-24 max-w-fit-content;
    }
  }

  td {
    &::after {
      @apply bg-blue-darker/20 h-1 -translate-x-[3px] w-full;
      content: '';
      z-index: 0;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    &:not(:first-of-type) {
      &::before {
        @apply bg-blue-darker/20 w-1 -translate-x-[3px] h-full;
        content: '';
        z-index: 0;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    &:nth-of-type(2) {
      &::before {
        @apply hidden;
      }
    }
    &:first-of-type {
      @apply text-blue-dark/60 w-[184px] min-w-[184px];
    }
  }
  tr:last-of-type td {
    &::after {
      @apply hidden;
    }
    /* &::before {
      @apply h-[calc(100%+6px)];
    } */
  }
  /* tr:nth-of-type(2) td {
    &::before {
      @apply h-[calc(100%+6px)] -top-6;
    }
  } */
  /* td:not(:first-of-type) {
    @apply border-blue-darker/20 border-l-1;

  } */
}

</style>
