<script setup>
import LHome from "@/components/molecules/l-home.vue";
import LNav from "@/components/molecules/l-nav.vue";
import LColLeft from "../components/molecules/l-col-left.vue";

</script>

<template>
  <main class="flex-container">
    <l-col-left>
      <l-home></l-home>
    </l-col-left>
    <section class="col-right image-right"></section>
  </main>
</template>
<style scoped></style>
