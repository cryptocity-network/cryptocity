import homePage from '~/graphql/pages/HomePage.js'
import merchantPage from '~/graphql/pages/MerchantPage.js'
import beginnerPage from '~/graphql/pages/BeginnerPage.js'
import aboutPage from '~/graphql/pages/AboutPage.js'
import networkPage from '~/graphql/pages/NetworkPage.js'
import newsPage from '~/graphql/pages/AllNewsPage.js'
import contactPage from '~/graphql/pages/ContactPage.js'
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
    case 'news':
      query = newsPage(regionId, locale)
      break
    case 'contact':
      query = contactPage(regionId, locale)
      break
    default:
      break
  }
  return query
}
