<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import WedLogo from '@/components/atoms/WedLogo.vue'
import NavMenu from '../components/NavMenu.vue';
</script>
<template>
  <main class="flex-container">
    <section class="col-left">
      <h1>About</h1>
      <NavMenu></NavMenu>
    </section>
    <section class="col-right">
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
