import type { Page } from '~/types'

export default (data: Page) => {
  if (data) {
    const compArray: Array<Component> = Object.values(data)
      .filter((x): x is Component => {
        return typeof x !== 'string' && '_modelApiKey' in x
      }) as Array<Component>

    return compArray as Array<Component>
  }
  return null
}
