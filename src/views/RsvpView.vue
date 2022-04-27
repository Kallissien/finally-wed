<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import LRsvpForm from "../components/organisms/l-rsvp-form.vue";
import LColFull from "../components/molecules/l-col-full.vue";
</script>
<template>
  <main class="full-width">
    <l-col-full>
      <h1>RSVP</h1>
      <l-rsvp-form></l-rsvp-form>
    </l-col-full>
  </main>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
