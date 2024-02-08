<template>
  <div />
</template>

<script lang="ts" setup>

import { useWebsiteStore } from '../store/store'
const store = useWebsiteStore()

// Declare configuration
onMounted(() => {
  console.log(store.getCurrentLocale)
  const lanng = store.getCurrentLocale
  // @ts-ignore
  window._iub = window._iub || []
  // @ts-ignore
  window._iub.csConfiguration = {
    askConsentAtCookiePolicyUpdate: true,
    floatingPreferencesButtonDisplay: 'anchored-bottom-right',
    lang: 'en',
    perPurposeConsent: true,
    siteId: 3331742,
    whitelabel: false,
    cookiePolicyId: 37212042,
    cookiePolicyUrl: 'https://www.kryptostadt.info/cookies',
    banner: {
      acceptButtonCaptionColor: '#FFFFFF',
      acceptButtonColor: '#0073CE',
      acceptButtonDisplay: true,
      backgroundColor: '#FFFFFF',
      brandBackgroundColor: '#FFFFFF',
      brandTextColor: '#000000',
      closeButtonDisplay: false,
      customizeButtonCaptionColor: '#4D4D4D',
      customizeButtonColor: '#DADADA',
      customizeButtonDisplay: true,
      explicitWithdrawal: true,
      listPurposes: true,
      logo: 'https://prismic-io.s3.amazonaws.com/kryptostadt/a28845fc-8e17-41ba-b709-668f8b66a667_kryptostadt-horizontal.svg',
      position: 'float-bottom-center',
      rejectButtonCaptionColor: '#FFFFFF',
      rejectButtonColor: '#0073CE',
      rejectButtonDisplay: true,
      textColor: '#000000'
    }
  }

  // Add scripts tag to head
  const script1 = document.createElement('script')
  script1.src = 'https://cdn.iubenda.com/cs/ccpa/stub.js'
  document.head.appendChild(script1)

  const script2 = document.createElement('script')
  script2.async = true
  script2.id = 'iubenda'
  script2.src = 'https://cdn.iubenda.com/cs/iubenda_cs.js'
  document.head.appendChild(script2)
})
</script>

<style>

</style>
