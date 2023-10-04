<template>
    <button class="download">
        <IconDownload />
        <span class="isDesktop">Download</span>
    </button>
</template>

<script setup lang="ts">
import IconDownload from '@/components/icons/IconDownload.vue';


</script>

<style scoped lang="scss">
.download {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #FFF200;
    background: #FFF200;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    color: #000;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 300;
    line-height: 1;
    height: 49px;
    padding: 0 23px;
}

@media (max-width: 992px) {
    .download {
        height: 41px;
        padding: 0 8px;
    }
}
</style>