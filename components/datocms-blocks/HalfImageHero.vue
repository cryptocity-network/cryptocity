<template>
  <BlockWrapper
    :block-background-color="data.settings.backgroundColor"
    :padding-top="0"
    :no-padding-bottom="false"
    :overlaps-next-section="true"
    class="!pt-96"
  >
    <div class="!px-24 xl:grid xl:grid-cols-2">
      <div
        class="px-24 pb-40 pt-80  lg:!ml-auto lg:px-72 lg:py-96 xl:max-h-[max(80vh,700px)] xl:max-w-[calc(684px+160px)] xl:px-96 2xl:px-160"
      >
        <HeadlineSection
          :label="data.label"
          :headline="data.headline"
          :subline="data.subline"
          :link="data.link"
          :link-label="data.linkLabel"
          :text-align="'left'"
        />
      <!-- <div
        v-if="contactName && contactPicture && contactTitleLabel"
        class="nq_small-label nq_r-mt-72"
      >
        {{ contactTitleLabel }}
      </div>
      <div
        v-if="contactName && contactPicture"
        class="shadow-contact-card nq_r-mt-16 w-[min(100vw-32px,362px)] rounded-6 bg-white p-16"
      >
        <ContactCard
          :name="contactName"
          :role="contactRole"
          :email="contactEmail.url"
          :telegram="contactTelegram.url"
          :linkedin="contactLinkedin.url"
          :picture="contactPicture"
        />
      </div> -->
      </div>

      <img
        v-if="data.image"
        :src="data.image.url"
        :alt="data.image.alt"
        class="mx-auto h-full rounded-8 object-cover xl:max-h-[max(80vh,700px)]"
      >
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>
