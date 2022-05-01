<script setup>
import LDivider from "../atoms/l-divider.vue";
</script>
<template>
  <LDivider />
  <nav class="flex">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/travel">Travel</RouterLink>
    <!-- <RouterLink to="/sightseeing">Sightseeing</RouterLink> -->
    <RouterLink to="/rsvp">RSVP</RouterLink>
  </nav>
</template>
<style lang="scss">
@import "@/assets/styles/variables.scss";
nav {
  font-size: 1.2rem;
  margin: 2rem auto 2rem auto;
}
nav > a {
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
</style>
