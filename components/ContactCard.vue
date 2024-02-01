<template>
  <div class="flex flex-col gap-32 px-32 py-40 lg:px-56 lg:pb-32 lg:pt-48 ">
    <span
      v-if="name"
      class="text-16 text-blue-dark"
    >
      {{ name }}
    </span>
    <span
      v-if="role"
      class="text-12 text-blue-dark/50"
    >
      {{ role }}
    </span>
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
  name: {
    required: true,
    type: String
  },
  role: {
    required: false,
    default: '',
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
  },
  picture: {
    required: true,
    type: Object
  }
})
</script>
