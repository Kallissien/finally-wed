<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import LRsvpForm from "../components/organisms/l-rsvp-form.vue";
import LColLeft from "../components/molecules/l-col-left.vue";
</script>
<template>
  <main class="flex-container">
    <l-col-left>
      <h1>RSVP</h1>
      <l-rsvp-form></l-rsvp-form>
    </l-col-left>
    <section class="col-right"></section>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
