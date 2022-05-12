<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <l-nav />
</template>
<script>
import { useOptionsStore } from '@/stores/optionsStore'
import { RouterLink, RouterView } from "vue-router";
import LNav from "./components/molecules/l-nav.vue";
export default{
  setup(){
    const optionsStore = useOptionsStore()
    return { optionsStore }
  },
  components: {
    LNav
  },
  beforeCreate() { 
    this.optionsStore.initialiseStore()
  },
}

</script>
<style lang="scss">
@import "@/assets/styles/base.css";
@import "@/assets/styles/variables.scss";
#app{
  width: 100vw;
  height: 100vh;
  color: $text-color;
  overflow: hidden;
  @media screen and (max-width: $screen-sm) {
    overflow: auto;
  }
  main{
    height: 90vh;
    background: $white;
  }
}
h1{
  font-size: $text-heading;
  line-height: 1.2em;
}
.text-base{
  font-size: $text-base;
}
.align-center{
  text-align: center;
}
.text-lg {
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.2em;
}
.image-right {
  background-image: url("@/assets/wedding-pic-bw.png");
  background-size: cover;
  background-position: center;
}
.logo {
  width: 80%;
  margin-bottom: $spacing-lg;
}
@media screen and (max-width: 800px) {
  .flex-container {
    flex-direction: column-reverse;
  }
  .col-left,
  .col-right {
    width: 100vw;
  }
  .col-left {
    height: 60vh;
    &.content {
      padding: 2rem 0;
    }
  }
  .col-right {
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
