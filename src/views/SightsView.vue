<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import LSightsContent from "@/components/organisms/l-sights-content.vue";
import LSightsMap from "@/components/organisms/l-sights-map.vue";
</script>
<template>
  <main class="flex-container">
    <section class="col-left">
      <l-sights-content></l-sights-content>
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
