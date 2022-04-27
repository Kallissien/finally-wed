<script setup>
    import lNav from './l-nav.vue';
</script>
<template>
    <section class="col-full">
        <article class="col-full__content">
            <slot></slot>
        </article>
        <l-nav></l-nav>
    </section>
</template>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.col-full{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    color: $text-color;
    min-width: 100vw;
    min-height: 100vh;
    h1{
        font-size: $heading;
    }
    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        padding: 2rem;
        width: 100%;
    }
}
</style>