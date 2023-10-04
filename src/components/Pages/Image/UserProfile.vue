<template>
    <div class="user flex items-center">
        <div class="user-avatar">
            <img :src="avatar" alt="avatar" loading="lazy">
        </div>
        <div class="user-info">
            <h2 class="user-name">{{ username }}</h2>
            <h5 class="user-insta">{{ insta }}</h5>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    avatar?: string;
    username: string;
    instagram_username?: string;
}

const props = defineProps<Props>()
const insta = computed(() => {
    return props.instagram_username === null ? `@${props.username.replace(/ /g, '').toLocaleLowerCase()}` : `@${props.instagram_username}`;
})

</script>

<style scoped lang="scss">
.user {
    &-avatar {
        width: 55px;
        height: 55px;
        margin-right: 10px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #ffffff;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &-name,
    &-insta {
        color: #F2F2F2;
        font-family: "Roboto";
        font-weight: 300;
        line-height: 1.1;
    }

    &-name {
        font-size: 30px;
    }

    &-insta {
        font-size: 18px;
    }
}

@media (max-width:992px) {
    .user {
        &-avatar {
            width: 48px;
            height: 48px;
        }

        &-name {
            color: #000;
            font-size: 18px;
        }

        &-insta {
            font-size: 14px;
            color: #bdbdbd;
        }
    }

}
</style>