<script setup>
import lNav from "./l-nav.vue";
</script>
<template>
  <section class="col">
      <slot></slot>
  </section>
</template>
<style lang="scss">
@import "@/assets/styles/variables.scss";
.col{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  &__content {
    background: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 2rem;
    width: 100%;
  }
  @media screen and (max-width: $screen-md) {
  }
}
</style>
