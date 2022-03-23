<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import WedLogo from '@/components/atoms/WedLogo.vue'
import NavMenu from '../components/NavMenu.vue';
</script>

<template>
  <main class="flex-container">
    <section class="col-left">
      <WedLogo class="logo"></WedLogo>
      <div class="content">
        <p class="text-lg">5th August 2022</p>
        <p class="text-lg">Marine Hotel Ballycastle</p>
      </div>
      <NavMenu></NavMenu>
    </section>
    <section class="col-right">
    </section>
  </main>
</template>
<style>
  .text-lg{
    font-size: 1.5rem;
    text-align: center;
  }
  .flex-container{
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    color: #212121;
  }
  .content{
    flex-grow: 1;
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