<template>
  <div>
    UID View
  </div>
</template>

<script lang="ts" setup>
const QUERY = `
    query {
      domain(filter: {url: {eq: "kryptostadt.de"}}) {
        id
        pages {
          ... on AboutRecord {
            id
            herosection {
              headline
              label
              subline
              _modelApiKey
            }
            _modelApiKey
          }
          ... on HomepageRecord {
            id
            cardCarousel {
              cards {
                comingSoon
                comingSoonText
                description
                id
                name
                image {
                  url
                  title
                }
              }
              _modelApiKey
            }
            herosection {
              subline
              label
              id
              headline
              _modelApiKey
            }
            _modelApiKey
          }
        }
      }
    }
  `;

  const { data, error } = await useGraphqlQuery({ query: QUERY });

</script>
