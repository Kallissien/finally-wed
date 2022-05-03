<script setup>
import LLogo from "@/components/atoms/l-logo.vue";
</script>
<template>
<article class="col__content">
    <l-logo class="logo"></l-logo>
  <div class="content">
    <h1 class="text-lg">
      <p>5th August 2022</p>
      <p>Marine Hotel Ballycastle</p>
    </h1>
    <h2 class="align-center">
      Ceremony starts 2pm
    </h2>
    <p class="text-base align-center">
      Thanks for visiting!
    </p>
    <p>
      Please <router-link to="/rsvp">RSVP</router-link> to let us know if you can make it.
    </p>
  </div>
</article>
</template>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.text-base{
  font-size: $text-base;
}
.align-center{
  text-align: center;
}
</style>
