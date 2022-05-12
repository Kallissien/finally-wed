<template>
  <article class="map-container">
    <l-map
      @ready="this.setMapObject"
      ref="travelMap"
      class="map"
      v-model:zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
      @touchstart.prevent="setMapObject"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="item in locationItems"
        ref="markers"
        :lat-lng="item.marker.latLng"
      >
        <l-icon
          :icon-url="item.marker.iconUrl"
          :icon-size="item.marker.iconSize" 
        />
      </l-marker>
    </l-map>
  </article>
</template>

<script>
import anime from 'animejs'
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  props:{
    locationItems: Array,
    currentElement: Number
  },
  data() {
    return {
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      zoom: 9,
      center: [55.205078, -6.240239],
      bounds: null,
      mapObject: Object
    }
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    autoZoom() {
      for(let i = 9 ; i < 12 ; i++){
        this.setZoom(i)
      }
    },
    animateMarker(element){
      anime({
        targets: element,
        width: {
          value: '-=20px', // 28 - 20 = '8px'
          duration: 1800,
          easing: 'easeInOutSine'
        },
        loop: true,
        easing: 'easeInOutSine'
      })
    },
    setMapObject(){
      this.mapObject = this.$refs.travelMap.leafletObject;
    },
    moveToPosition(position){
      this.mapObject.flyTo(position);
    }
  },
  watch: {
    currentElement (val, oldVal) {
      this.moveToPosition(this.locationItems[val].marker.latLng)
    }
  },
  mounted(){
  }
}
</script>
<style lang="scss">
.map-container{
  height: 100%;
  width: 100%;
  z-index: 1;
  pointer-events: none;
  user-select: none;
  .map{
    width: 100%;
    height: 100%;
  }
  .leaflet-top.leaflet-left {
    display: none;
  }
}
.leaflet-marker-icon{
  pointer-events: none !important;
  user-select: none !important;
}
</style>