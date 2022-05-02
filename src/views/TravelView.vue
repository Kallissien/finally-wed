<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import LTravelContent from "@/components/organisms/l-travel-content.vue";
import LTravelMap from "@/components/organisms/l-travel-map.vue";
import LCol from "../components/molecules/l-col.vue";
</script>
<template>
  <main class="flex-container">
    <h1></h1>
    <l-col class="col__travel">
      <l-travel-content></l-travel-content>
      <Teleport to="body">
        <l-nav></l-nav>
      </Teleport>
    </l-col>
    <l-col class="col__map">
      <l-travel-map></l-travel-map>
    </l-col>
  </main>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
.col{
  @media (min-width: $screen-sm) {
    &__map{
      height: 30vh;
    }
    &__travel{
      height: 70vh;
    }
  }
}
</style>
