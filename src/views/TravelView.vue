<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import LTravel from "@/components/molecules/l-travel.vue";
</script>
<template>
  <main class="flex-container">
    <section class="col-left">
      <l-travel></l-travel>
      <l-nav></l-nav>
    </section>
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
