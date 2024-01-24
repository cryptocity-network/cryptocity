<template>
  <div class="relative flex flex-col w-full max-w-lg mx-auto bg-white shadow z-1 rounded-8 lg:divide-y-1 lg:divide-blue/10 ">
    <ContactCard
      :name="socialLinks.name"
      :role="socialLinks.role"
      :email="socialLinks.email"
      :telegram="socialLinks.telegram"
      :linkedin="socialLinks.linkedin"
      :picture="socialLinks.image"
    />
    <iframe
      class="mx-auto w-full h-[725px] rounded-b-6 px-40 py-16 lg:px-28 lg:py-16"
      src="https://notionforms.io/forms/criptociudad-san-jose-contact-form-2"
      frameborder="0"
      ></iframe>
  </div>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from "~/store/store";
const store = useWebsiteStore();
defineProps({
  data: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const socialLinks = store.country.socialLinks

//   const useContactSlice = props.slice.variation === 'fromCommonSlice'

//   if (!useContactSlice) {
//     const formData = {
//       name: '',
//       email: '',
//       message: '',
//     }
const formData = {
  name: "",
  email: "",
  message: "",
};

const disabled = ref(true);

function onInput(field: "name" | "email" | "message", value: string) {
  formData[field] = value;
  disabled.value = !formIsValid();
}

function formIsValid() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    formData.name.length > 0 &&
    formData.email.length > 0 &&
    formData.message.length > 0 &&
    emailRegex.test(formData.email)
  );
}
//   else {
//     const contactDetails = ref({})

//     const { $prismic } = useContext()

//     useFetch(async () => {
//       const res = await $prismic.api.query($prismic.predicates.at('document.type', 'contact'))
//       if (res.results.length !== 1) return
//       contactDetails.value = { ...res.results[0].data } || {}
//     })

//     return {
//       useContactSlice,
//       contactDetails,
//     }
//   }
</script>
