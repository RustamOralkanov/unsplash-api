<template>
    <button class="favorite flex justify-center items-center" @click="store.addToFavorite(id)">
        <IconFavorite :color="'black'" />
    </button>
</template>

<script setup lang="ts">
import IconFavorite from '@/components/icons/IconFavorite.vue';
import { useImageStore } from '@/stores/store';

interface Props {
    id: string
}

defineProps<Props>()
const store = useImageStore();

</script>

<style scoped lang="scss">
.favorite {
    width: 49px;
    height: 49px;
    background-color: #ffffff;
    border-radius: 8px;
}

@media (max-width: 992px) {
    .favorite {
        width: 41px;
        height: 41px;
        box-shadow: 0 0 1px 0 #aeaeae
    }
}
</style>