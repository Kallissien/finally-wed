<script setup>
import lNav from "./l-nav.vue";
</script>
<template>
  <section class="col-full">
      <slot></slot>
  </section>
</template>
<style lang="scss">
@import "@/assets/styles/variables.scss";
.col-full {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  color: $text-color;
  width: 100%;
  @media screen and (max-width: $screen-sm) {
      justify-content: flex-start;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 2rem;
    width: 100%;
    height: 100%;
  }
}
</style>
