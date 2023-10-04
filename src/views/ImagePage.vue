<template>
    <section class="image-page" v-if="singeImage">
        <div class="image-page-background">
            <div class="image-page-overlay"></div>
            <img :src="singeImage.urls.regular" :alt="singeImage.alt_description">
        </div>
        <div class="container">
            <div class="image-page-top flex justify-between">
                <UserProfile :avatar='singeImage.user.profile_image?.medium' :username="singeImage.user.name"
                    :instagram_username="singeImage.user.instagram_username" />
                <div class="image-page-btns flex">
                    <AddFavorite :id="singeImage.id" />
                    <ImageDownload />
                </div>
            </div>
            <ImageBanner :image="singeImage.urls.regular" :alt="singeImage.alt_description" />
        </div>
    </section>
    <section v-else class="h-screen flex items-center justify-center">
        <h2 class="text-3xl">Loading...</h2>
    </section>
</template>

<script setup lang="ts">
import AddFavorite from '@/components/Pages/Image/AddFavorite.vue';
import UserProfile from '@/components/Pages/Image/UserProfile.vue'
import ImageBanner from '@/components/Pages/Image/ImageBanner.vue'
import ImageDownload from '@/components/Pages/Image/ImageDownload.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from "@/plugins/axios";
import type { Images } from '@/types/Types';

const route = useRoute()
const singeImage = ref<Images>()

onMounted(async () => {
    await axiosClient.get<Images>(`/photos/${route.params.id}`, {
        params: {
            id: route.params.id
        }
    }).then(({ data }): Images => {
        return singeImage.value = data
    });
})
</script>

<style scoped lang="scss">
.image-page {
    position: relative;
    margin-bottom: 100px;

    &-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #00000050;
        backdrop-filter: blur(4px);
        z-index: -2;
        height: 85%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000050;
        backdrop-filter: blur(4px);
    }

    &-top {
        padding: 46px 0 40px;
    }

    &-btns {
        gap: 20px;
    }
}

@media (max-width: 992px) {
    .image-page {
        &-background {
            display: none;
        }
    }
}
</style>