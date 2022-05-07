<script setup>
import LNav from "@/components/molecules/l-nav.vue";
import LTravelContent from "@/components/organisms/l-travel-content.vue";
import LTravelMap from "@/components/organisms/l-travel-map.vue";
import LCol from "../components/molecules/l-col.vue";
</script>
<template>
  <main class="col-2">
    <l-col class="col__travel">
      <l-travel-content :locationItems="travelData"></l-travel-content>
    </l-col>
    <l-col class="col__map">
      <l-travel-map></l-travel-map>
    </l-col>
  </main>
</template>
<script>
export default{
  data(){
    return{
      travelData:{
        venue:{
          locationName:"Marine Hotel Ballycastle",
          locationDescription: "The Venue",
          imageUrl:"/marine-hotel.jpeg",
          locationLink: "https://marinehotelballycastle.com"
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.col-2{
  @media(max-width: $screen-sm){
    flex-direction: column-reverse;
  }
}
.col{
  @media (max-width: $screen-sm) {
    &__map{
      height: 40vh;
    }
    &__travel{
      height: 60vh;
    }
  }
}
</style>
