<template>
  <div class="content">
    <h1 class="fixed-header">Travel</h1>
    <section class="card-list"
    >
      <l-travel-card 
        v-for="item in locationItems"
        :bind="item.id"
        :id="item.id"
        :locationName="item.locationName"
        :locationDescription="item.locationDescription"
        :imageUrl="item.imageUrl"
        :locationLink="item.locationLink"
      />
    </section>
  </div>
</template>
<script>
import LTravelCard from "@/components/molecules/l-travel-card.vue"
export default {
  components:{
    LTravelCard
  },
  props:{
    locationItems: Array
  }
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.content{
  height: 100%;
  width: 100%;
  // padding: 0 2rem;
  overflow: visible;
  @media screen and (max-width: $screen-sm) {
    overflow: hidden;
  }
}
.card-list{
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  scroll-snap-type: x mandatory;
  padding-top: 1rem;
  @media screen and (max-width: $screen-sm) {
    padding-top: 0;
    flex-flow: row nowrap;
  }
}
.fixed-header{
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  @media screen and (max-width: $screen-sm){
    text-shadow: 0px 0px 5px rgb(0 0 0 / 70%);
    position: fixed;
    top: 4px;
    left: 0;
    color: #fff;
    z-index: 99;
    width: 100vw;
    text-align: center;
    user-select: none;
    pointer-events: none;
  }
}
</style>