<template>
  <TheCard
    :image="article.coverImage"
    :title="article.title"
    :is-video="(article.embedVideo as boolean)"
    :description="article.excerpt"
    :label="(label as string)"
    :link="articleLink"
    :footer="formattedDate"
    :full-screen="fullScreen"
  />
</template>

<script lang="ts" setup>
import type { NewsArticle } from '~/types/dato-models/NewsArticle'
import { useWebsiteStore } from '~/store/store'

const store = useWebsiteStore()
const { locale } = useI18n()

const props = defineProps({
  article: {
    type: Object as PropType<NewsArticle>,
    required: true
  },
  fullScreen: {
    type: Boolean,
    default: false
  }
})

const formattedDate = computed(() => {
  const date = new Date(props.article._createdAt)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return `${day}-${month}-${year}`
})

const articleLink: Ref<string> = computed(() => {
  if (props.article.externalArticleUrl) {
    return props.article.externalArticleUrl
  }
  return `news/${props.article.slug}`
})

const label: ComputedRef<string | null> = computed(() => {
  if (props.article.externalArticleUrl) {
    return null
  } else {
    return `
    <svg class="mr-8 h-18" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1102 4.30256C13.1102 4.30256 13.0813 4.30128 13.0524 4.3C13.0524 4.3 13.0524 4.3 13.0234 4.29872L12.6763 4.28335L11.923 4.27896L7.86709 4.24422L7.86838 4.2153C7.91015 2.62389 9.12756 1.31627 10.7011 1.12522C10.7011 1.12522 10.73 1.1265 10.7589 1.12779C10.7879 1.12907 10.8168 1.13035 10.8168 1.13035L10.8457 1.13163L11.1928 1.147L11.8606 1.11863L15.9166 1.15337L15.9153 1.18229C15.9011 2.8039 14.6535 4.13914 13.1102 4.30256Z" fill="white"/>
      <path d="M7.18712 4.91267C7.18712 4.91267 7.18712 4.94161 7.15817 4.94161V5.02843L6.98445 5.25995L6.60805 5.92557L4.55237 9.42732C4.55237 9.42732 4.55237 9.42732 4.52341 9.42732C3.13365 8.617 2.58354 6.8806 3.22051 5.43359C3.22051 5.43359 3.22051 5.40465 3.24947 5.40465C3.24947 5.37571 3.27842 5.34677 3.27842 5.34677L3.30737 5.31783L3.48109 5.02843L3.82853 4.44963L5.85527 0.918945C5.85527 0.918945 5.85527 0.918945 5.88422 0.918945C7.27398 1.75821 7.82409 3.46567 7.18712 4.91267Z" fill="white"/>
      <path d="M7.21717 14.8387C5.79846 15.649 4.06126 15.2438 3.1058 13.9994L3.07685 13.9705L3.04789 13.9126L3.01894 13.8836L2.84522 13.5942L2.49778 13.0154L0.5 9.48475C0.5 9.48475 0.5 9.48475 0.528953 9.48475C1.94767 8.67443 3.68487 9.07959 4.64033 10.324L4.66928 10.353L4.843 10.6424L5.21939 11.308L7.21717 14.8387Z" fill="white"/>
      <path d="M10.4046 18.4852C10.4046 18.4852 10.3757 18.4852 10.3467 18.4852C10.3467 18.4852 10.3467 18.4852 10.3178 18.4852H9.97032H9.21753H5.16406V18.4562C5.16406 16.8356 6.3801 15.5043 7.94358 15.3018C7.94358 15.3018 7.97254 15.3018 8.00149 15.3018C8.03044 15.3018 8.0594 15.3018 8.0594 15.3018H8.08835H8.43579H9.10172H13.1552V15.3307C13.1841 16.9513 11.997 18.2826 10.4046 18.4852Z" fill="white"/>
      <path d="M17.9864 14.3183C17.9864 14.3183 17.9864 14.3472 17.9574 14.3472L17.7837 14.6366L17.4073 15.3023L15.3806 18.804C15.3806 18.804 15.3806 18.804 15.3516 18.804C13.9619 17.9937 13.3828 16.2862 14.0198 14.8392C14.0198 14.8392 14.0198 14.8103 14.0487 14.8103C14.0487 14.7813 14.0777 14.7524 14.0777 14.7524L14.1066 14.7235L14.2803 14.4341L14.6278 13.8553L16.6545 10.3535C16.6545 10.3535 16.6545 10.3535 16.6835 10.3535C18.0443 11.1638 18.5944 12.8713 17.9864 14.3183Z" fill="white"/>
      <path d="M20.8541 10.0344C19.4644 10.8737 17.6982 10.5553 16.7138 9.31089L16.6848 9.28195L16.6559 9.22407L16.6269 9.19513L16.4532 8.90573L16.1058 8.32693L13.9922 4.88306C13.9922 4.88306 13.9922 4.88306 14.0211 4.88306C15.4109 4.0438 17.1771 4.36214 18.1615 5.60656L18.1904 5.6355L18.3641 5.9249L18.7695 6.56159L20.8541 10.0344C20.8831 10.0344 20.8831 10.0344 20.8541 10.0344Z" fill="white"/>
    </svg>
    <span class="leading-[100%]">${props.fullScreen ? 'Featured Article' : 'Cryptocity article'}</span>
    `
  }
})

</script>
