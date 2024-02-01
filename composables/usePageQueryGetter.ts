import homePage from '@/graphql/HomePage.js'
import merchantPage from '@/graphql/MerchantPage.js'
import beginnerPage from '@/graphql/BeginnerPage.js'
import aboutPage from '@/graphql/AboutPage.js'
import networkPage from '@/graphql/NetworkPage.js'
export default (pageType: string | undefined, regionId: string | undefined, locale: string | null) => {
  let query
  switch (pageType) {
    case 'home':
      query = homePage(regionId, locale)
      break
    case 'merchant':
      query = merchantPage(regionId, locale)
      break
    case 'beginner':
      query = beginnerPage(regionId, locale)
      break
    case 'about':
      query = aboutPage(regionId, locale)
      break
    case 'network':
      query = networkPage(regionId, locale)
      break
    default:
      break
  }
  return query
}
