<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import WedLogo from '@/components/atoms/WedLogo.vue'
</script>

<template>
  <main class="flex-container">
    <section class="col-left">
      <WedLogo class="logo"></WedLogo>
    </section>
    <section class="col-right">
    </section>
  </main>
</template>
<style scoped>
  .flex-container{
    min-height: 100vh;
    overflow: hidden;
    display: flex;
  }
  .col-left, .col-right{
    box-sizing: border-box;
    width: 50vw;
    height: 100vh;
  }
  .col-left{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 4rem
  }
  .col-right{
    background-image: url('@/assets/wedding-pic-bw.png');
    background-size: cover;
    background-position: center;
  }
  .logo{
    width: 20rem;
    height: 20rem;
  }
  @media screen and (max-width: 800px){
    .flex-container{
      flex-direction: column;
    }
    .col-left, .col-right{
      width: 100vw;
      height: 50vh;
    }
  }
</style>