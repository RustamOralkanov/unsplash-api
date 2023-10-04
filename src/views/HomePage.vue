<script setup lang="ts">
import TheSearch from '@/components/TheSearch.vue';
import TheGallery from '@/components/TheGallery.vue';
import { useImageStore } from '@/stores/store'

const store = useImageStore()
store.getRandomPhoto()

</script>

<template>
  <main>
    <TheSearch />
    <TheGallery :images="store.images" />
  </main>
</template>
