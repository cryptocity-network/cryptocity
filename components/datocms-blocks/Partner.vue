// eslint-disable-next-line vue/multi-word-component-names
<template>
  <li
    class="flex flex-col gap-y-16 px-0 py-40 md:gap-y-20 md:px-40 md:py-48 xl:gap-y-24 xl:px-48 xl:py-56"
    :class="{
      'children:text-center children:mx-auto max-w-lg': center,
      'bg-radial-green text-white': backgroundColor === 'green',
      'bg-radial-gold text-white': backgroundColor === 'gold',
    }"
  >
    <div
      class="flex flex-col-reverse flex-wrap justify-between gap-x-16 gap-y-32 sm:flex-row"
    >
      <img
        v-if="logo"
        :src="logo"
        class="mr-auto h-28 max-w-[75%] md:h-32"
      >
    </div>
    <img
      v-if="image && Object.keys(image).length > 0"
      :src="image"
      class="mx-auto w-full max-w-lg md:w-unset"
    >
    <div
      class="prose no-margin text-blue/60"
      v-html="marked.parse(description)"
    />

    <TheLink
      v-if="linkLabel && linkHref"
      variant="info"
      secondary
      :text="linkLabel"
      :url="linkHref"
      :is-external="true"
    />

    <ul
      v-if="facebook || twitter || linkedin || whatsapp || telegram || email || youtube || discord || instagram"
      class="flex items-center gap-x-12"
    >
      <li v-if="facebook">
        <SocialLink
          :social-media="{
            name: 'facebook',
            key: 'facebook',
            url: `https://www.facebook.com/${facebook}`,
          }"
        />
      </li>
      <li v-if="twitter">
        <SocialLink
          :social-media="{
            name: 'twitter',
            key: 'twitter',
            url: `https://www.twitter.com/${twitter}`,
          }"
        />
      </li>
      <li v-if="linkedin">
        <SocialLink
          :social-media="{
            name: 'linkedin',
            key: 'linked_in',
            url: `https://www.linkedin.com/${linkedin}`,
          }"
        />
      </li>
      <li v-if="whatsapp">
        <SocialLink
          :social-media="{
            name: 'whatsapp',
            key: 'whatsapp',
            url: `https://wa.me/${whatsapp}`,
          }"
        />
      </li>
      <li v-if="telegram">
        <SocialLink
          :social-media="{
            name: 'telegram',
            key: 'telegram',
            url: `https://t.me/${telegram}`,
          }"
        />
      </li>
      <li v-if="email">
        <SocialLink
          :social-media="{
            name: 'email',
            key: 'email',
            url: `mailto:${email}`,
          }"
        />
      </li>
      <li v-if="youtube">
        <SocialLink
          :social-media="{
            name: 'youtube',
            key: 'youtube',
            url: `https://www.youtube.com/${youtube}`,
          }"
        />
      </li>
      <li v-if="discord">
        <SocialLink
          :social-media="{
            name: 'discord',
            key: 'discord',
            url: `https://discord.gg/${discord}`,
          }"
        />
      </li>
      <li v-if="instagram">
        <SocialLink
          :social-media="{
            name: 'instagram',
            key: 'instagram',
            url: `https://www.instagram.com/${instagram}`,
          }"
        />
      </li>
    </ul>
  </li>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
defineProps({
  logo: {
    default: '',
    type: String
  },
  image: {
    default: '',
    type: String
  },
  companyName: {
    default: '',
    type: String
  },
  description: {
    type: String,
    default: null
  },
  linkHref: {
    default: null,
    type: String
  },
  linkLabel: {
    default: '',
    type: String
  },
  twitter: {
    default: '',
    type: String
  },
  facebook: {
    default: '',
    type: String
  },
  whatsapp: {
    default: '',
    type: String
  },
  linkedin: {
    default: '',
    type: String
  },
  telegram: {
    default: '',
    type: String
  },
  email: {
    default: '',
    type: String
  },
  youtube: {
    default: '',
    type: String
  },
  discord: {
    default: '',
    type: String
  },
  instagram: {
    default: '',
    type: String
  },
  center: {
    default: false,
    type: Boolean
  },
  backgroundColor: {
    default: 'transparent',
    type: String
  }
})
</script>
