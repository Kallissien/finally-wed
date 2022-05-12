<template>
  <main class="col-2">
    <l-col class="col__travel">
      <l-travel-content :locationItems="travelData" />
    </l-col>
    <l-col class="col__map">
      <l-travel-map :locationItems="travelData" :currentElement="currentElement" />
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
      travelData:[
        {
          id:'venue',
          locationName:"Marine Hotel Ballycastle",
          locationDescription: "The venue for the ceremony and the reception. There will be a break while dinner is being prepared so you can roam the beach and pick up some ice cream from Mauds!",
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
        {
          id:'airport',
          locationName:"Belfast International Airport",
          locationDescription: "The best way to get to the venue is to fly here and rent a car or taxi to Ballycastle. You can get a bus to Antrim and from there a train to Ballymena, but it will take a fair few hours!",
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
      ],
      currentElement: 0
    }
    },
    methods:{
      isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left+ rect.width >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      },
      updateVisibleCard(){
        let id = 0
        this.travelData.forEach(element => {
          let currentElement = document.getElementById(element.id)
          if(this.isInViewport(currentElement)){
            this.currentElement = id
          }
          id++
        })
      }
    },
    mounted(){
      const cardList = document.querySelector('.card-list');
      cardList.addEventListener('scroll', ()=>{
        this.updateVisibleCard()
    })
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
