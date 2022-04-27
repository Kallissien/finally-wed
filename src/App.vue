<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "@/assets/styles/base.css";
.flex {
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
  overflow: auto;
}
.image-right {
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
    flex-direction: column-reverse;
  }
  .col-left,
  .col-right {
    width: 100vw;
  }
  .col-left{
    height: 60vh;
    &.content{
      padding: 2rem 0;
    }
  }
  .col-right{
    height: 40vh;
    overflow: hidden;
  }
}
/* Animations */
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: scale(0.99);
  opacity: 0;
}
</style>
