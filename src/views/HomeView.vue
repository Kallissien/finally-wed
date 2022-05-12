<script setup>
import LHomeContent from "@/components/organisms/l-home-content.vue";
import LCol from "../components/molecules/l-col.vue";
</script>

<template>
  <main class="col-2">
    <l-col>
      <l-home-content />
    </l-col>
  </main>
</template>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.col-2{
  display: flex;
  flex-direction: row;
  @media screen and (max-width: $screen-md){
    display: flex;
    flex-direction: row;
  }
}
  @media screen and (max-width: $screen-sm){
    .image-right{
      display: none;
    }
  }
</style>
