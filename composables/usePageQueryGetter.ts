import homePage from '@/graphql/HomePage.js'
import merchantPage from '@/graphql/MerchantPage.js'
import beginnerPage from '@/graphql/BeginnerPage.js'
import aboutPage from '@/graphql/AboutPage.js'
import networkPage from '@/graphql/NetworkPage.js'
export default (pageType: string | undefined, countryId: string | undefined, locale: string | null) => {
  let query
  switch (pageType) {
    case 'home':
      query = homePage(countryId, locale)
      break
    case 'merchant':
      query = merchantPage(countryId, locale)
      break
    case 'beginner':
      query = beginnerPage(countryId, locale)
      break
    case 'about':
      query = aboutPage(countryId, locale)
      break
    case 'network':
      query = networkPage(countryId, locale)
      break
    default:
      break
  }
  return query
}
