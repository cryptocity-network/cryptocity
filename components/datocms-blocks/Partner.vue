// eslint-disable-next-line vue/multi-word-component-names
<template>
  <li
    class="flex flex-col gap-y-16 px-32 py-40 md:gap-y-20 md:px-40 md:py-48 lg:gap-y-24 lg:px-48 lg:py-56"
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
        class="mr-auto h-28 max-w-[75%] lg:h-32"
      >
      <div
        v-if="badge"
        class="flex h-32 w-max items-center gap-8 rounded bg-[#21BCA5]/20 px-16 py-8 text-[#13B59D]"
      >
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="height: 18px"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.03.342a1.641 1.641 0 0 0-2.519.674l-.559 1.357a1.641 1.641 0 0 1-1.306 1.002l-1.455.189A1.641 1.641 0 0 0 .888 5.822l.564 1.354a1.641 1.641 0 0 1-.215 1.632L.342 9.97a1.641 1.641 0 0 0 .674 2.519l1.357.559c.544.224.926.722 1.002 1.306l.189 1.455a1.641 1.641 0 0 0 2.258 1.303l1.354-.563a1.641 1.641 0 0 1 1.632.214l1.162.895c.857.66 2.107.326 2.519-.674l.559-1.357a1.641 1.641 0 0 1 1.306-1.002l1.455-.189a1.641 1.641 0 0 0 1.303-2.258l-.563-1.354a1.641 1.641 0 0 1 .214-1.632l.895-1.162a1.641 1.641 0 0 0-.674-2.519l-1.357-.559a1.641 1.641 0 0 1-1.002-1.306l-.189-1.455A1.641 1.641 0 0 0 12.178.888l-1.354.564a1.641 1.641 0 0 1-1.632-.215L8.03.342Zm4.875 7.478a1.06 1.06 0 0 0-1.474-1.523L7.944 9.67 6.57 8.34a1.06 1.06 0 1 0-1.473 1.522l2.111 2.044a1.06 1.06 0 0 0 1.474 0l4.224-4.087Z"
            fill="currentColor"
          />
        </svg>
        <span class="whitespace-nowrap text-16 font-bold"> {{ badge }}</span>
      </div>
    </div>
    <img
      v-if="image && Object.keys(image).length > 0"
      :src="image"
      class="mx-auto w-full max-w-lg md:w-unset"
    >
    <span
      v-if="label"
      class="nq_small-label"
      :class="{ 'text-white/70': backgroundColor !== 'transparent' }"
    >{{ label }}</span>
    <div
      v-if="companyName"
      class="flex items-center gap-x-16"
      :class="{
        'justify-center': center,
      }"
    >
      <h3
        class="nq_boldline text-24"
        :class="{
          'text-primary': backgroundColor === 'transparent',
          '!text-white': backgroundColor !== 'transparent',
        }"
      >
        {{ companyName }}
      </h3>
    </div>

    <div
      class="prose text-blue/60"
      v-html="marked.parse(description)"
    />

    <TheLink
      v-if="linkLabel && linkHref"
      variant="info"
      secondary
      :text="linkLabel"
      :link="linkHref"
    />

    <ul class="flex items-center gap-x-12">
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
  label: {
    default: '',
    type: String
  },
  description: {
    type: String,
    default: null
  },
  linkHref: {
    default: '',
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
  badge: {
    type: String,
    default: null
  },
  backgroundColor: {
    default: 'transparent',
    type: String
  }
})
</script>
