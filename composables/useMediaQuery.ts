import { Ref, ref } from 'vue'
import useEventListener from './useEventListener'

export function useMediaQuery(query: string): Readonly<Ref<boolean>> {
  if (!process.client) return ref(false) // only run on client

  const mediaQuery = window.matchMedia(query)
  const matches = ref(mediaQuery.matches)
  useEventListener(
    'change',
    (e) => {
      matches.value = e.matches
    },
    mediaQuery
  )
  return matches
}
