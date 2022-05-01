<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import LTravelContent from "@/components/organisms/l-travel-content.vue";
import LTravelMap from "@/components/organisms/l-travel-map.vue";
</script>
<template>
  <main class="flex-container">
    <section class="col-left">
      <l-travel-content></l-travel-content>
      <l-nav></l-nav>
    </section>
    <section class="col-right">
      <l-travel-map></l-travel-map>
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
