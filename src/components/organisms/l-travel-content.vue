<template>
  <div class="content">
    <h1 class="fixed-header">Travel</h1>
    <section class="card-list"
    v-for="item in locationItems"
    :bind="item.id"
    >
      <l-travel-card 
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
export default{
  components:{
    LTravelCard
  },
  props:{
    locationItems:{
      type: Array,
    }
  }
}
</script>
<style lang="scss">
.content{
  height: 100%;
  width: 100%;
}
.card-list{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.fixed-header{
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
</style>