<template>
  <transition appear name="popup">
    <div v-if="showSection" class="fixed bottom-24 right-24 z-[9999] flex w-[343px] overflow-hidden rounded-8  drop-shadow-lg md:w-[521px]  md:max-w-md lg:max-w-4xl">
      <DatoImage
        v-if="data.image"
        :image="data.image"
        class="!absolute left-0 top-0 size-full rounded-6"
      />
      <div
        class="!absolute left-0 top-0 size-full rounded-6 "
        style="background: linear-gradient(270deg, rgba(31, 35, 72, 0.30) 26.02%, rgba(31, 35, 72, 0.80) 59.97%);"
      />
      <div
        class="!absolute left-0 top-0 size-full rounded-8 border-4 border-white/60"
      />

      <div
        class="content z-1 flex max-w-[290px] flex-col items-start justify-items-center p-16 md:max-w-[390px]"
      >
        <h4 class="max-w-screen-2xl text-white">
          {{ data.headline }}
        </h4>
        <p
          class="text-[17px] no-margin mt-8 max-w-screen-2xl !text-white/60"
        >
          {{ data.description }}
        </p>
        <TheLink variant="info" :text="$t('Kryptostadt TV')" :is-external="true" :url="data.youtubeLink" class=" mt-22 " />
      </div>
      <svg
        class="absolute right-[17px] top-16 size-14 cursor-pointer hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        fill="none"
        @click="showSection = false"
      >
        <g opacity="0.6">
          <path d="M11.6476 9.9552C12.0736 10.4299 12.0549 11.1548 11.6049 11.6069C11.1549 12.0589 10.4303 12.0807 9.95398 11.6565L6.21581 7.9172C6.09785 7.80077 5.90826 7.80077 5.7903 7.9172L2.05333 11.6565C1.57881 12.1145 0.827047 12.1145 0.352526 11.6565C0.126821 11.431 0 11.125 0 10.8059C0 10.4868 0.126821 10.1807 0.352526 9.9552L4.0907 6.21706C4.14714 6.16087 4.17888 6.0845 4.17888 6.00484C4.17888 5.92519 4.14714 5.84881 4.0907 5.79263L0.352526 2.05328C-0.0786344 1.579 -0.0619878 0.849753 0.390365 0.395653C0.842718 -0.0584467 1.57167 -0.0776799 2.04732 0.351935L5.7843 4.09128C5.84067 4.14782 5.91722 4.17959 5.99705 4.17959C6.07687 4.17959 6.15342 4.14782 6.2098 4.09128L9.94797 0.351935C10.4176 -0.117546 11.1788 -0.117277 11.6482 0.352536C12.1175 0.822349 12.1172 1.5838 11.6476 2.05328L7.9094 5.79263C7.7925 5.90994 7.7925 6.09975 7.9094 6.21706L11.6476 9.9552Z" fill="white" />
          <path d="M11.6476 9.9552C12.0736 10.4299 12.0549 11.1548 11.6049 11.6069C11.1549 12.0589 10.4303 12.0807 9.95398 11.6565L6.21581 7.9172C6.09785 7.80077 5.90826 7.80077 5.7903 7.9172L2.05333 11.6565C1.57881 12.1145 0.827047 12.1145 0.352526 11.6565C0.126821 11.431 0 11.125 0 10.8059C0 10.4868 0.126821 10.1807 0.352526 9.9552L4.0907 6.21706C4.14714 6.16087 4.17888 6.0845 4.17888 6.00484C4.17888 5.92519 4.14714 5.84881 4.0907 5.79263L0.352526 2.05328C-0.0786344 1.579 -0.0619878 0.849753 0.390365 0.395653C0.842718 -0.0584467 1.57167 -0.0776799 2.04732 0.351935L5.7843 4.09128C5.84067 4.14782 5.91722 4.17959 5.99705 4.17959C6.07687 4.17959 6.15342 4.14782 6.2098 4.09128L9.94797 0.351935C10.4176 -0.117546 11.1788 -0.117277 11.6482 0.352536C12.1175 0.822349 12.1172 1.5838 11.6476 2.05328L7.9094 5.79263C7.7925 5.90994 7.7925 6.09975 7.9094 6.21706L11.6476 9.9552Z" fill="white" />
        </g>
      </svg>
    </div>
  </transition>
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

const showSection = ref(false)
onMounted(() => {
  setTimeout(() => {
    showSection.value = true
  }, 1000)
})
</script>

<style scoped>

.popup-enter-active,
.popup-leave-active {
  transition: all 0.7s ease;
  transition-timing-function: cubic-bezier(.36,1.42,.27,.99);
  opacity: 1;
}

.popup-enter-from,
.popup-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
