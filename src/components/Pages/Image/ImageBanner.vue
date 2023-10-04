<template>
    <div class="image">
        <img :src="image" :alt="alt">
    </div>
</template>

<script setup lang="ts">
interface Props {
    alt: string,
    image: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.image {
    width: 100%;
    height: 744px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
}

@media (max-width:576px) {
    .image {
        height: 340px;
    }
}
</style>