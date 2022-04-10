<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <transition mode="in-out" name="slide-fade">
    <RouterView />
  </transition>
</template>

<style>
@import "@/assets/base.css";

.flex{
  display: flex;
}
.text-lg {
  font-size: 1.5rem;
  text-align: center;
}
.flex-container {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  color: #212121;
}
.content {
  flex-grow: 1;
}
.col-left,
.col-right {
  box-sizing: border-box;
  width: 50vw;
  height: 100vh;
}
.col-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 4rem;
}
.col-right {
  
}
.image-right{
  background-image: url("@/assets/wedding-pic-bw.png");
  background-size: cover;
  background-position: center;
}
.logo {
  width: 20rem;
  height: 20rem;
}
@media screen and (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
  .col-left,
  .col-right {
    width: 100vw;
    height: 50vh;
  }
}
/* Animations */
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
