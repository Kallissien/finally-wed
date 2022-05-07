<script setup>
import LLogo from "@/components/atoms/l-logo.vue";
</script>
<template>
<article class="col__content">
    <l-logo class="logo"></l-logo>
  <div class="header align-center">
    <h1>
      <p class="text-lg">5th August 2022</p>
      <p class="text-xl">Marine Hotel Ballycastle</p>
    </h1>
    <h2 class="align-center">
      Ceremony starts 2pm
    </h2>
  </div>
  <div class="content">
    <p class="text-base align-center">
      Thanks for visiting Finally Wed! Please <router-link to="/rsvp">RSVP</router-link> to let us know if you can make it.
    </p>
  </div>
</article>
</template>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.header{
  margin-bottom: $spacing-base;
}
</style>
