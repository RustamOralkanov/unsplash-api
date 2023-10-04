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
import type { Images } from '../types/Types';
import TheGalleryItem from './TheGalleryItem.vue';

interface Props {
    images: Images[]
}

defineProps<Props>()
</script>

<style lang="scss">
@media (max-width: 992px) {
    .gallery {
        margin-top: 50px;

        &-wrapper {
            gap: 20px;
        }
    }

}
</style>