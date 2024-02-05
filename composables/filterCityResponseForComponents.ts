import type { CityData, Component } from '@/types/index'

export default (data: CityData) => {
  if (data) {
    const compArray: Array<Component> = Object.values(data.city)
      .filter((x): x is Component => {
        return typeof x !== 'string' && '_modelApiKey' in x
      }) as Array<Component>
    return compArray as Array<Component>
  }
  return null
}
