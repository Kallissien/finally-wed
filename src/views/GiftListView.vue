<script setup>
    import lGiftContent from '../components/organisms/l-gift-content.vue';
    import LCol from "../components/molecules/l-col.vue";
</script>
<template>
  <main class="col-2">
    <l-col>
        <l-gift-content />
    </l-col>
    <l-col class="header-img">
    </l-col>
  </main>
</template>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.header-img{
    background: url('/img/seychelles.jpeg');
    background-size: fit;
    background-position: center;
    background-repeat: no-repeat;
    @media screen and (max-width: $screen-sm){
        height: 30%;
    }
}
</style>