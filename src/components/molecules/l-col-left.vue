<script setup>
    import lNav from './l-nav.vue';
</script>
<template>
    <section class="col-left">
        <article class="col-left__content">
            <slot></slot>
        </article>
        <l-nav></l-nav>
    </section>
</template>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.col-left{
    h1{
        font-size: $heading;
    }
    &__content{
        flex-grow: 1;
    }
}
</style>