import { useRuntimeConfig } from 'nuxt/app'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import { defineStore } from 'pinia'

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => {
    return {
      domain: null,
      pages: null
    }
  },
  getters: {
    getCurrentDomain (state) { return state.domain }
  },
  actions: {
    async setNavigation () {
      const domain = useRuntimeConfig().public.DATO_DOMAIN
      const QUERY = `
          query {
            domain(filter: {url: {eq: "${domain}"}}) {
              id
              pages {
                ... on HomepageRecord {
                  id
                  _modelApiKey
                }
                ... on AboutRecord {
                  id
                  _modelApiKey
                }
                ... on PageRecord {
                  id
                  title
                  _modelApiKey
                }
              }
            }
          }
        `

      const { data, error } = await useGraphqlQuery({ query: QUERY })
      this.pages = data.value.domain.pages
      this.domain = data.value.domain
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
