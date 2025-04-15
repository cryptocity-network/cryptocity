<template>
  <div>
    <div class="grid grid-cols-[min-content_1fr] grid-rows-[min-content_min-content] items-center gap-x-24 p-18 sm:p-32  ">
      <div class="sm:row-span-2">
        <DatoImage v-if="employee?.profilePhoto" :image="employee?.profilePhoto" :priority="true" class="size-96 rounded-full object-cover object-center" style="width: 96px;height:96px" />
        <svg
          v-else
          class="row-span-2 w-80 pt-4"
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
      </div>
      <div>
        <h4 class="mb-4 text-blue-dark">
          {{ employee?.name }}
        </h4>
        <p class="text-16 text-blue-dark/50">
          {{ employee?.jobTitle }}
        </p>
      </div>
      <div class="col-span-2 mt-16 flex items-center justify-start gap-x-16 sm:col-span-1 sm:col-start-2">
        <TheLink
          v-if="employee?.socials?.email"
          :social-media="{ url: `mailto:${employee.socials.email}`, name: 'Email', key: 'email' }"
          :text="$t('welcome')"
          variant="info"
          compact
        />
        <div class="pl- flex h-[21px] items-center gap-x-16">
          <SocialLink
            v-if="employee?.socials?.youtube"
            :social-media="{ url: employee.socials.youtube, name: 'YouTube', key: 'youtube' }"
          />
          <SocialLink
            v-if="employee?.socials?.twitter"
            :social-media="{ url: employee.socials.twitter, name: 'Twitter', key: 'twitter' }"
          />
          <SocialLink
            v-if="employee?.socials?.tikTok"
            :social-media="{ url: employee.socials.tikTok, name: 'TikTok', key: 'tiktok' }"
          />
          <SocialLink
            v-if="employee?.socials?.telegram"
            :social-media="{ url: employee.socials.telegram, name: 'Telegram', key: 'telegram' }"
          />
          <SocialLink
            v-if="employee?.socials?.pintrest"
            :social-media="{ url: employee.socials.pintrest, name: 'Pinterest', key: 'pintrest' }"
          />
          <SocialLink
            v-if="employee?.socials?.linkedIn"
            :social-media="{ url: employee.socials.linkedIn, name: 'LinkedIn', key: 'linked_in' }"
          />
          <SocialLink
            v-if="employee?.socials?.instagram"
            :social-media="{ url: employee.socials.instagram, name: 'Instagram', key: 'instagram' }"
          />
          <SocialLink
            v-if="employee?.socials?.facebook"
            :social-media="{ url: employee.socials.facebook, name: 'Facebook', key: 'facebook' }"
          />
          <SocialLink
            v-if="employee?.socials?.whatsapp"
            :social-media="{ url: employee.socials.whatsapp, name: 'WhatsApp', key: 'whatsapp' }"
          />
          <SocialLink
            v-if="employee?.socials?.phoneNumber"
            :social-media="{ url: `tel:${employee.socials.phoneNumber}`, name: 'Phone number', key: 'phone_number' }"
          />
        </div>
      </div>
    </div>
    <div v-if="employee?.quote" class="border-t-1 border-blue/10 bg-blue/5 p-16 text-blue-dark sm:p-32">
      <p class="text-center text-16 leading-1.5 text-blue/60 sm:text-18">
        <span class="font-bold text-blue-dark">“</span>
        {{ employee?.quote }}
        <span class="font-bold text-blue-dark">”</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '@/store/store'
import SocialLink from '@/components/SocialLink.vue'
import TheLink from '@/components/TheLink.vue'
interface Employee {
  name: string
  jobTitle: string
  quote: string
  profilePhoto?: {
    url: string
    width: number
    height: number
  }
  socials?: {
    youtube?: string
    twitter?: string
    tikTok?: string
    telegram?: string
    pintrest?: string
    linkedIn?: string
    instagram?: string
    facebook?: string
    email?: string
    whatsapp?: string
    phoneNumber?: string
  }
}

const websiteStore = useWebsiteStore()
const employee = computed<Employee | undefined>(() => websiteStore.region?.employee)

defineProps({
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
  phoneNumber: {
    required: false,
    default: '',
    type: String
  }
})
</script>
