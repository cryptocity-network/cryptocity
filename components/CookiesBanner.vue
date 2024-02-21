<template>
  <div />
</template>

<script lang="ts" setup>

import { useWebsiteStore } from '../store/store'
const store = useWebsiteStore()

// Declare configuration
onMounted(() => {
  const lang = store.getCurrentLocale
  // @ts-ignore
  window._iub = window._iub || []
  // @ts-ignore
  window._iub.csConfiguration = {
    askConsentAtCookiePolicyUpdate: true,
    floatingPreferencesButtonDisplay: 'anchored-bottom-right',
    lang,
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
      logo: 'https://www.datocms-assets.com/117771/1706866461-criptocity-signet.svg',
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
  script1.defer = true
  document.head.appendChild(script1)

  const script2 = document.createElement('script')
  script2.async = true
  script2.id = 'iubenda'
  script2.src = 'https://cdn.iubenda.com/cs/iubenda_cs.js'
  script1.defer = true
  document.head.appendChild(script2)
})
</script>

<style>

</style>
