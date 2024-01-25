<template>
  <a
    v-if="socialMediaData"
    :href="socialMediaData.url"
    :title="socialMediaData.name"
    target="_blank"
    rel="noreferrer"
    class="social-link size-24"
    @focus="onFocus"
    @click="onClick"
  >
    <TwitterLogo
      v-if="socialMediaData.key === 'twitter'"
      class="twitter"
    />

    <RedditLogo
      v-if="socialMediaData.key === 'reddit'"
      class="reddit"
    />

    <FacebookLogo
      v-if="socialMediaData.key === 'facebook'"
      class="facebook"
    />

    <YouTubeLogo
      v-if="socialMediaData.key === 'youtube'"
      class="youtube"
    />

    <InstagramLogo
      v-if="socialMediaData.key === 'instagram'"
      class="instagram"
    />

    <DiscordLogo
      v-if="socialMediaData.key === 'discord'"
      class="discord"
    />

    <TelegramLogo
      v-if="socialMediaData.key === 'telegram'"
      class="telegram"
    />

    <NimiqForumLogo
      v-if="socialMediaData.key === 'nimiq_forum'"
      class="nimiq-forum"
    />

    <GithubLogo
      v-if="socialMediaData.key === 'github'"
      class="github"
    />

    <LinkedInLogo
      v-if="socialMediaData.key === 'linked_in'"
      class="linkedin"
    />

    <EmailLogo
      v-if="socialMediaData.key === 'email'"
      class="email"
    />

    <WhatsappLogo
      v-if="socialMediaData.key === 'whatsapp'"
      class="whatsapp"
    />
    <!-- <span v-if="socialMediaData.key === 'whatsapp'" class="whatsapp">Whatsapp</span> -->
  </a>
</template>

<script lang="ts" setup>
import TwitterLogo from '@/static/logos/twitter.svg'
import RedditLogo from '@/static/logos/reddit.svg'
import FacebookLogo from '@/static/logos/facebook.svg'
import YouTubeLogo from '@/static/logos/youtube.svg'
import InstagramLogo from '@/static/logos/instagram.svg'
import DiscordLogo from '@/static/logos/discord.svg'
import TelegramLogo from '@/static/logos/telegram.svg'
import NimiqForumLogo from '@/static/logos/nimiq-forum.svg'
import GithubLogo from '@/static/logos/github.svg'
import LinkedInLogo from '@/static/logos/linkedin.svg'
import EmailLogo from '@/static/logos/email.svg'
import WhatsappLogo from '@/static/logos/whatsapp.svg'

const props = defineProps({
  socialMedia: {
    default: () => {},
    type: Object
  },
  socialMediaKey: {
    default: '',
    type: String
  }
})
defineEmits(['onFocus', 'onClick'])
// @ts-ignore
const onFocus = () => emit('onFocus')

const onClick = (e: MouseEvent) => {
  e.target instanceof HTMLElement && e.target.blur()
  // @ts-ignore
  emit('onClick')
}

interface SocialMedia {
  url: string,
  name: string,
  key: string,
  color: string,
}

const socialMedias = [
  {
    url: 'https://twitter.com/nimiq',
    name: 'Twitter',
    key: 'twitter',
    color: '#1da1f2'
  },
  {
    url: 'https://t.me/joinchat/AAAAAEJW-ozFwo7Er9jpHw',
    name: 'Telegram',
    key: 'telegram',
    color: '#0088cc'
  },
  {
    url: 'https://www.reddit.com/r/Nimiq',
    name: 'Reddit',
    key: 'reddit',
    color: '#ff4500'
  },
  {
    url: 'https://github.com/nimiq',
    name: 'Github',
    key: 'github',
    color: '#333333'
  },
  {
    url: 'https://www.youtube.com/c/nimiq',
    name: 'Youtube',
    key: 'youtube',
    color: '#ff0000'
  },
  {
    url: 'https://discord.gg/cMHemg8',
    name: 'Discord',
    key: 'discord',
    color: '#5865F2'
  },
  {
    url: 'https://forum.nimiq.community',
    name: 'Nimiq Forum',
    key: 'nimiq_forum',
    color: '#E9B213'
  },
  {
    url: 'https://www.facebook.com/nimiq',
    name: 'Facebook',
    key: 'facebook',
    color: '#4267B2'
  },
  {
    url: 'https://www.instagram.com/wearenimiq',
    name: 'Instagram',
    key: 'instagram',
    color: '#c13584'
  }
]

let socialMediaData = null as SocialMedia | null
if (props.socialMediaKey) {
  const socialMedia = socialMedias.find(
    socialMedia => socialMedia.key === props.socialMediaKey
  )
  if (!socialMedia) {
    throw new Error('Invalid Social Media ' + props.socialMediaKey)
  }
  socialMediaData = socialMedia as SocialMedia
} else {
  socialMediaData = props.socialMedia as SocialMedia
}
</script>

<style scoped>
.social-link {
  @apply block transition-opacity opacity-40 hover:opacity-60;

  svg {
    @apply shrink-0;
  }
}

.reddit {
  @apply h-20;
}

.youtube,
.facebook,
.instagram,
.telegram {
  @apply h-22;
}

.twitter,
.nimiq-forum,
.discord,
.github {
  @apply h-24;
}
</style>
