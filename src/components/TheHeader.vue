<template>
    <header class="header bg-black ">
        <div class="container">
            <div class="wrapper flex justify-between items-center pt-23">
                <RouterLink to="/">
                    <IconLogo class="logo" />
                </RouterLink>
                <nav class="nav flex">
                    <RouterLink to="/" class="nav-link flex" v-if="activeSearch">
                        <IconSearch :color="'white'" /><span class="isDesktop">Поиск</span>
                    </RouterLink>
                    <RouterLink to="/favorite" class="nav-link flex">
                        <IconFavorite /><span class="isDesktop">Избранное</span>
                    </RouterLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import IconLogo from './icons/IconLogo.vue'
import IconFavorite from './icons/IconFavorite.vue'
import IconSearch from './icons/IconSearch.vue';
import { RouterLink, useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';

const route = useRoute();
const isVisible = ref(true);

const activeSearch = computed(() => {
    return route.name === 'home' ? isVisible.value = false : isVisible.value = true
})


</script>

<style scoped lang="scss">
.header {
    padding: 37px 0;
}

.logo {
    width: 185px;
}

.nav {
    gap: 38px;

    &-link {
        color: #FFF;
        font-family: "Roboto";
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        gap: 12px;
    }
}

@media (max-width: 992px) {


    .header {
        padding: 0;
    }

    .logo {
        width: 84px;
    }

    .nav {
        gap: 20px;
    }
}
</style>