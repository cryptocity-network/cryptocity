<template>
  <div
    class="!h-[200vh]"
  >
    <HeroSection
      heroTitle="Lerne unsere Partner kennen!"
      label="DAS KRYPTOSTADT NETZWERK"
      subHeading="Die Kryptostadt Initiative vereint Projekte und Unternehmen, die den Einsatz von Kryptowährungen und Blockchain-Technologie fördern."
    />
    <HeroSection
      heroTitle="Lerne unsere Partner kennen!"
      link="aksfdh"
      label="DAS KRYPTOSTADT NETZWERK"
      subHeading="Die Kryptostadt Initiative vereint Projekte und Unternehmen, die den Einsatz von Kryptowährungen und Blockchain-Technologie fördern."
    />
  </div>
</template>

<script lang="ts" setup>

import { useWebsiteStore } from '../store/store'
import useGraphqlQuery from '../composables/useGraphqlQuery'
const store = useWebsiteStore()
const domainId = store.getDomainId
console.log(domainId)

const QUERY = `
    query {
        homepage(filter: {site: {eq: "${domainId}"}}) {
            cardCarousel {
                _modelApiKey
                cards {
                    id
                    image {
                        url
                        title
                        alt
                        id
                        format
                    }
                }
            }
            herosection {
                _modelApiKey
                id
                label
                headline
                subline
            }
        }
    }
  `

  const { data, error } = await useGraphqlQuery({ query: QUERY });

console.log(store.domain.id)

</script>
