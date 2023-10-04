<template>
    <section class="search flex justify-center items-center">
        <div class="search-overlay"></div>
        <form role="search" class="search-form">
            <input type="text" class="search-input" placeholder="Поиск" v-model="keyword">
            <button type="submit" class="search-btn" @click.prevent="store.searchPhoto(keyword)">
                <IconSearch class="text-black" :color="'black'" />
            </button>
        </form>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import IconSearch from './icons/IconSearch.vue';
import { useImageStore } from '@/stores/store';

const store = useImageStore()
const keyword = ref('')

</script>

<style scoped lang="scss">
.search {
    height: 253px;
    border-bottom: 16px solid #c4c4c4;
    background: url('../assets/images/0b5126bddfc82e66c661d6c2fd217bd4.jpeg') center center/cover no-repeat;
    position: relative;

    &-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);
    }

    &-form {
        position: relative;
        z-index: 10;
        max-width: 866px;
        width: 100%;

    }

    &-input {
        width: 100%;
        padding: 22px 34px 21px 39px;
        font-family: 'Roboto' sans-serif;
        font-size: 24px;
        font-weight: 300;
        line-height: 28px;

        &::placeholder {
            color: #000;
            font-size: 24px;
            font-weight: 300;
            line-height: 28px;
            font-family: 'Roboto' sans-serif;
        }
    }

    &-btn {
        position: absolute;
        top: 50%;
        right: 34px;
        transform: translateY(-50%);
    }
}

@media (max-width: 992px) {
    .search {
        &-form {
            padding: 0 20px;
        }
    }
}
</style>