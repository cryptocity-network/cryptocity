import { onMounted, ref } from 'vue'
import { useBreakpoints } from './useBreakpoints'
const fastConnectionTypes = ['ethernet', 'wifi', '4g']

const slowConnectionTypes = ['cellular', 'bluetooth', 'slow-2g', '2g']

export function useBestVideo({ highRes, lowRes, mediumRes }: { highRes: string; mediumRes: string; lowRes: string }) {
  const recommendedVideoUrl = ref(lowRes)

  // we run this code on mount to avoid SSR issues with the window object
  onMounted(() => {
    // @ts-expect-error outdated types
    const connection = window.navigator?.connection

    const { smallScreen } = useBreakpoints()
    const isFastConnection = ref(
      !!window.navigator &&
        !!connection &&
        (('type' in connection && fastConnectionTypes.includes(connection.type)) ||
          ('effectiveType' in connection && fastConnectionTypes.includes(connection.effectiveType)))
    )
    const isSlowConnnection = ref(
      !!window.navigator &&
        !!connection &&
        (('type' in connection && slowConnectionTypes.includes(connection.type)) ||
          ('effectiveType' in connection && slowConnectionTypes.includes(connection.effectiveType)))
    )

    if (isSlowConnnection.value) {
      recommendedVideoUrl.value = lowRes
    } else if (smallScreen.value && isFastConnection.value) {
      recommendedVideoUrl.value = mediumRes
    } else if (isFastConnection.value) {
      recommendedVideoUrl.value = highRes
    } else {
      recommendedVideoUrl.value = mediumRes
    }
  })

  return {
    recommendedVideoUrl,
  }
}
