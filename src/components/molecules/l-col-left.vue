<script setup>
import lNav from "./l-nav.vue";
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
@import "@/assets/styles/variables.scss";
.col-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 50vw;
  height: 100vh;
  @media screen and (max-width: $screen-md) {
    width: 100vw;
    height: 60vh;
  }
  h1 {
    font-size: $heading;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 2rem;
    width: 100%;
  }
}
</style>
