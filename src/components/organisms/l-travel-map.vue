<template>
  <article class="map-container">
    <!-- <div class="info" style="height: 10%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div> -->
    <l-map
      class="map"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="[55.205078, -6.240239]">
        <l-icon class="venue-icon" :icon-url="venueIcon.iconUrl" :shadow-url="venueIcon.shadowUrl" :icon-size="venueIcon.iconSize" />
      </l-marker>
    </l-map>
  </article>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data() {
    return {
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      zoom: 9,
      center: [55.205078, -6.240239],
      bounds: null,
      mapPoints: [
        {
          name: "Marine Hotel",
          desc: "The Venue",
          lat: "55.205078",
          lng: "-6.240239",
        },
      ],
      venueIcon:{
        iconUrl: '/marker-venue.png',
        //shadowUrl: '/marker-venue.png',
        iconSize:     [38, 38], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [0, 18], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      }
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
    }
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
};
</script>
<style lang="scss">
.map-container{
  z-index: 1;
  height: 100%;
  width: 100%;
  .map{
    width: 100%;
    height: 100%;
  }
}
</style>