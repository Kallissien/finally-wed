<template>
  <main class="col-2">
    <l-col class="col__travel">
      <l-travel-content @touchstart="this.updateVisibleCard(e)" :locationItems="travelData" />
    </l-col>
    <l-col class="col__map">
      <l-travel-map :locationItems="travelData" />
    </l-col>
  </main>
</template>
<script>
import LTravelContent from "@/components/organisms/l-travel-content.vue"
import LTravelMap from "@/components/organisms/l-travel-map.vue"
import LCol from "../components/molecules/l-col.vue"
export default {
  components:{
    LTravelContent,
    LTravelMap,
    LCol
  },  
  data(){
    return{
      travelData:{
        venue:{
          id:'location1',
          locationName:"Marine Hotel Ballycastle",
          locationDescription: "Both the ceremony and the reception are being held here.",
          imageUrl:"/img/marine-hotel.jpeg",
          linkText: "See more",
          locationLink: "https://marinehotelballycastle.com",
          marker:{
            id: 'marker1',
            latLng: [55.205078, -6.240239],
            iconUrl: '/marker-venue.png',
            iconSize:     [38, 38], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [18.5, 38], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
          }
        },
        airport:{
          locationName:"Belfast International Airport",
          locationDescription: "Closest airport to the north coast",
          imageUrl:"/img/airport.jpeg",
          linkText: "Book a flight",
          locationLink: "https://www.belfastairport.com",
          marker:{
            id: 'marker2',
            latLng: [54.66255927541024, -6.217741894521833],
            iconUrl: '/marker-venue.png',
            iconSize:     [38, 38], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [0, 18], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
          }
        },
      }
    }
    },
    methods:{
      isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      },
      updateVisibleCard(event){
        console.log(this.isInViewport(event.target))
      }
    },
    mounted(){
      
  }
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.col-2{
  flex-direction: row;
  @media(max-width: $screen-sm){
    flex-direction: column-reverse;
  }
}
.col{
  &__map{
      width: 40vw;
    }
    &__travel{
      width: 60vw;
    }
  @media (max-width: $screen-sm) {
    &__map{
      width: 100%;
      height: 40vh;
    }
    &__travel{
      width: 100%;
      height: 60vh;
    }
  }
}
</style>
