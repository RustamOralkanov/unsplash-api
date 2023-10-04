<template>
    <section class="gallery">
        <div class="container">
            <div class="gallery-wrapper flex flex-wrap">
                <TheGalleryItem v-for="image in images" :key="image.id" :image="image" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheGalleryItem from './TheGalleryItem.vue';

defineProps({
    images: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="scss">
.gallery {
    margin-top: 114px;
    padding-bottom: 200px;

    &-wrapper {
        gap: 30px;
    }
}
</style>