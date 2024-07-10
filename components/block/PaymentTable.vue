<template>
  <BlockWrapper
    :block-background-color="'gray'"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="overflow-x-auto px-16 !pt-120"
  >
    <table
      class="merchants-table"
      :style="`--cols: ${tableData.length}; --rows: ${Object.keys(tableData[0]).length - 2};`"
    >
      <div class="test" />
      <tr>
        <th />
        <th v-for="item in tableData" :key="item.id">
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
        <td v-for="item in tableData" :key="item.id">
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
              v-if="item.acceptedCrypto.includes('usdc')"
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.92176 0.95282L16.7188 0.95282C17.0003 0.95282 17.2603 1.1034 17.4007 1.3477L20.8376 7.32884C21.0158 7.63902 20.9629 8.03051 20.7087 8.28204L11.2484 17.6418C10.9419 17.945 10.4489 17.945 10.1425 17.6418L0.694966 8.29468C0.434828 8.03731 0.386116 7.63441 0.577409 7.32229L4.25124 1.32851C4.39432 1.09508 4.64821 0.95282 4.92176 0.95282ZM15.1956 3.62319L15.1956 5.30142L11.8351 5.30142L11.8351 6.46498C14.1953 6.58933 15.966 7.10001 15.9792 7.71213L15.9791 8.98823C15.9659 9.60035 14.1953 10.111 11.8351 10.2354L11.8351 13.0909L9.60365 13.0909L9.60365 10.2354C7.24345 10.111 5.47269 9.60035 5.45959 8.98823L5.45963 7.71212C5.47278 7.10001 7.24345 6.58933 9.60365 6.46498L9.60365 5.30142L6.24315 5.30142L6.24315 3.62319L15.1956 3.62319ZM10.7194 9.35871C13.2381 9.35871 15.3433 8.92688 15.8585 8.3502C15.4216 7.86117 13.8413 7.47628 11.8351 7.37057L11.8351 8.58884C11.4755 8.60778 11.1022 8.61776 10.7194 8.61776C10.3365 8.61776 9.96325 8.60778 9.60365 8.58884L9.60365 7.37057C7.59739 7.47628 6.01707 7.86117 5.58017 8.3502C6.09537 8.92688 8.20062 9.35871 10.7194 9.35871Z" fill="#009393" />
            </svg>
          </div>

          <!-- {{ item.acceptedCryptoCurrencies }} -->
        </td>
      </tr>
      <tr>
        <td>{{ axisData.fees }}</td>
        <td v-for="item in tableData" :key="item.id">
          {{ item.fees }}
        </td>
      </tr>
      <tr>
        <td>{{ axisData.nimiqPay }}</td>
        <td v-for="item in tableData" :key="item.id">
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
        <td v-for="item in tableData" :key="item.id">
          {{ item.releaseDate }}
        </td>
      </tr>
      <tr>
        <td>{{ axisData.payment }}</td>
        <td v-for="item in tableData" :key="item.id">
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
const tableData = computed(() => {
  return props.data.table.table
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
