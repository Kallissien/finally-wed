<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import LSights from "@/components/molecules/l-sights.vue";
import LSightsMap from "@/components/molecules/l-map-sights.vue";
</script>
<template>
  <main class="flex-container">
    <section class="col-left">
      <l-sights></l-sights>
      <l-nav></l-nav>
    </section>
    <section class="col-right">
      <l-sights-map></l-sights-map>
    </section>
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
