import type { CityResponse } from '@/types/dato-api-responses/City'

export default (data: CityResponse) => {
  if (data) {
    const compArray: Array<Component> = Object.values(data.city)
      .filter((x): x is Component => {
        return typeof x !== 'string' && '_modelApiKey' in x
      }) as Array<Component>
    return compArray as Array<Component>
  }
  return null
}
