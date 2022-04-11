<template>

  <div style="height: 100vh; color: #fff">
    <div class="info" style="height: 10%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>
    <l-map
      style="height: 90%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="[55.205078, -6.240239]"></l-marker>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from '@vue-leaflet/vue-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: [55.203643, -6.255379],
      bounds: null
    };
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
}
</script>
