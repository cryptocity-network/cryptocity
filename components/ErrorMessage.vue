<template>
  <div class="flex h-screen w-full items-center justify-center">
    <HeadlineSection
      label="Are you lost?"
      headline="That page doesn't exist"
      subline="Please click below to return home, or use the navigation to go to a page"
      has-link
      :link="{
        label: 'Go Home',
        url: '/'
      }"
    />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
