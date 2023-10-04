<template>
  <div class="about">
    <div class="container">
      <h1 class="title">Избранное</h1>
      <TheFavorites :images="store.localImages" v-if="store.localImages" />
      <div v-else class="h-screen flex justify-center items-center text-2xl">
        Empty
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheFavorites from '../components/TheFavorites.vue'
import { useImageStore } from '@/stores/store'

const store = useImageStore()
store.fetchLocalImages()


</script>

<style scoped lang="scss">
.title {
  padding: 94px 0 0;
  color: #000;
  text-align: center;
  font-family: "Roboto";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media (max-width: 992px) {
  .title {
    font-size: 36px;
    padding: 40px 0 0;
  }

}
</style>