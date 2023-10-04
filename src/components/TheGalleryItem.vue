<template>
    <div class="gallery-item">
        <router-link :to="{ name: 'image', params: { id: image.id } }">
            <img :src="image.urls.small" :alt="image.alt_description">
        </router-link>
    </div>
</template>

<script setup lang="ts">
interface Props {
    image: {
        id: string,
        alt_description: string,
        urls: {
            small: string
        }
    }
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.gallery-item {
    width: calc(33% - 16px);
    height: 453px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
}

@media (max-width: 1300px) {
    .gallery-item {
        width: calc(50% - 15px);
        height: unset;
    }
}

@media (max-width: 992px) {
    .gallery-item {
        width: 100%;
    }
}


@media (max-width: 576px) {
    .gallery-item {
        height: 321px;
    }
}
</style>