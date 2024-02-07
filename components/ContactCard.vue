<template>
  <div class="grid grid-cols-[repeat(2,minmax(0,max-content))] grid-rows-[repeat(2,min-content)] gap-x-32 gap-y-16 px-32 py-40 lg:px-56 lg:pb-32 lg:pt-48 ">
    <svg
      class="row-span-2"
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="70"
      fill="none"
      viewBox="0 0 80 70"
    >
      <path fill="#F5871F" d="M40.879.035h19.196c0 6.605-5.193 12.694-12.578 12.694h-19.16C28.3 6.049 33.64.035 40.88.035Z" />
      <path fill="#D84332" d="M70.42 18.266c.036.11 9.58 16.752 9.58 16.752-5.668 3.321-13.529 1.845-17.222-4.686-.037-.11-9.58-16.752-9.58-16.752 5.85-3.321 13.639-1.66 17.222 4.686Z" />
      <path fill="#28B9A2" d="M17.222 39.63c.036.11 9.58 16.752 9.58 16.752-5.668 3.32-13.53 1.845-17.222-4.686C9.543 51.585 0 34.943 0 34.943c5.814-3.284 13.602-1.586 17.222 4.687Z" />
      <path fill="#E7B121" d="M24.643 17.38c-.036.11-9.58 16.752-9.58 16.752-5.667-3.32-8.336-10.922-4.643-17.38C10.457 16.642 20 0 20 0c5.777 3.432 8.227 11.07 4.643 17.38Z" />
      <path fill="#1D2348" d="M69.654 53.247c-.036.11-9.58 16.752-9.58 16.752-5.667-3.32-8.336-10.922-4.643-17.38.036-.11 9.58-16.752 9.58-16.752 5.776 3.358 8.226 11.033 4.643 17.38Z" />
      <path fill="#1681C4" d="M32.615 57.305h19.197c0 6.605-5.193 12.693-12.578 12.693h-19.16c-.073-6.716 5.302-12.693 12.541-12.693Z" />
    </svg>
    <div class="flex flex-col">
      <h3
        v-if="header"
        class="text-blue-dark"
      >
        {{ header }}
      </h3>
      <p
        v-if="subline"
        class="text-blue-dark/50"
      >
        {{ subline }}
      </p>
    </div>
    <div class="flex h-[21px] items-center gap-x-16 pl-4">
      <SocialLink
        v-if="email"
        :social-media="{
          name: 'Email',
          key: 'email',
          url: email,
        }"
      />
      <SocialLink
        v-if="telegram"
        :social-media="{
          name: 'Telegram',
          key: 'telegram',
          url: telegram,
        }"
      />
      <SocialLink
        v-if="linkedin"
        :social-media="{
          name: 'LinkedIn',
          key: 'linked_in',
          url: linkedin,
        }"
      />
      <SocialLink
        v-if="twitter"
        :social-media="{
          name: 'twitter',
          key: 'twitter',
          url: twitter,
        }"
      />
      <SocialLink
        v-if="whatsapp"
        :social-media="{
          name: 'Whatsapp',
          key: 'whatsapp',
          url: `https://wa.me/${whatsapp}`,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  header: {
    required: false,
    default: null,
    type: String
  },
  subline: {
    required: false,
    default: null,
    type: String
  },
  email: {
    required: false,
    default: '',
    type: String
  },
  telegram: {
    required: false,
    default: '',
    type: String
  },
  linkedin: {
    required: false,
    default: '',
    type: String
  },
  twitter: {
    required: false,
    default: '',
    type: String
  },
  whatsapp: {
    required: false,
    default: '',
    type: String
  }
})
</script>
