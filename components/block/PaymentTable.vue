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
          {{ item.acceptedCryptoCurrencies }}
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
