import { useRuntimeConfig } from 'nuxt/app'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import { defineStore } from 'pinia'

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => {
    return {
      country: null,
      pages: null
    }
  },
  getters: {
    getCurrentCountry (state) { return state.country }
  },
  actions: {
    async setNavigation (isGlobal) {
      if (isGlobal) {
        const QUERY = `{
          global {
            id
            content {
              ... on CountriesCarouselRecord {
                id
                countries {
                  url
                  name
                  id
                }
              }
              ... on HeroSectionRecord {
                id
                image {
                  url
                  alt
                }
                link
                linkLabel
                subline
                label
                headline
              }
            }
          }
        }`
        const { data, error } = await useGraphqlQuery({ query: QUERY })
        this.country = data.value.global
      } else {
        const country = useRuntimeConfig().public.DATO_DOMAIN
        const QUERY = `
            query {
              country(filter: {url: {eq: "${country}"}}) {
                id
                pages {
                  ... on AboutPageRecord {
                    id
                    _modelApiKey
                  }
                  ... on BeginnerPageRecord {
                    id
                    _modelApiKey
                  }
                  ... on HomePageRecord {
                    id
                    _modelApiKey
                  }
                  ... on MerchantPageRecord {
                    id
                    _modelApiKey
                  }
                  ... on NetworkPageRecord {
                    id
                    _modelApiKey
                  }
                  ... on PageRecord {
                    id
                    _modelApiKey
                  }
                }
              }
            }
          `

        const { data, error } = await useGraphqlQuery({ query: QUERY })
        this.pages = data.value.country.pages
        this.country = data.value.country
      }
    }
  }
})

// const pages = [
//   '/en', '/merchants', '/beginners', '/network-en', '/about-us-en', '/contact-en', '/wallet-en'
// ]
// const englishPages = pages.concat(pages.map(p => `${p}/`))
// export const actions = {
//   async fetch({ commit }, { $prismic, route }: {$prismic:$Prismic, route:any}) {
//     try {
//       const isEnglish = englishPages.includes(route) || route.includes('-en')
//       const singleName = isEnglish ? 'navigation_en' : 'navigation'
//       const navigation = (await $prismic.api.getSingle(singleName)).data
//       commit('SET_NAVIGATION', navigation)
//     } catch (e) {
//       const error = 'Please create a navigation custom type document in Prismic'

//       commit('SET_ERROR', error)
//     }
//   },
// }
