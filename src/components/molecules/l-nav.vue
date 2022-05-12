<script setup>
import LDivider from "../atoms/l-divider.vue";
</script>
<template>
  <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/travel">Travel</RouterLink>
      <RouterLink to="/rsvp">RSVP</RouterLink>
  </nav>
</template>
<style lang="scss">
@import "@/assets/styles/variables.scss";
nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: #f3f1eb;
  position: fixed;
  bottom: 0;
    padding: 0.5rem;
    border-top: 1px solid $primary-100;
    a{
      margin-right: 1rem;
      color: $primary-200;
      border: solid 1px $primary-100;
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
      text-decoration: none;

      &.router-link-exact-active {
        border-bottom: 4px solid $primary-100;
      }
      &:nth-last-child(1) {
        margin-right: 0;
      }
      &:hover {
        color: darken($primary-200, 20%);
        border-color: darken($primary-100, 20%);
      }
      &:focus {
        outline: darken($primary-100, 40%);
      }
      &:active {
        color: darken($primary-200, 40%);
        border-color: darken($primary-100, 40%);
      }
    }
}
</style>
