<template>
  <div>
  
    <GmapMap
      style="width: 600px; height: 400px"
      :zoom="1"
      :center="{ lat: 100, lng: 245 }"
      
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        {
          position: {
            lat: 10.0,
            lng: 10.0,
          },
          position: {
            lat: 11.0,
            lng: 11.0,
          },
        },
      ],
      place: null,

        methods: {
          fitBounds() {
            var b = new google.maps.LatLngBounds();

            b.extend({
              lat: 33.972,
              lng: 35.4054
            });
            b.extend({
              lat: 33.7606,
              lng: 35.64592
            });

            this.$refs.mmm.fitBounds(b);
          },
          panToBounds() {
            var b = new google.maps.LatLngBounds();

            b.extend({
              lat: 33.972,
              lng: 35.4054
            });
            b.extend({
              lat: 33.7606,
              lng: 35.64592
            });

            this.$refs.mmm.panToBounds(b);
          },
          panTo() {
            this.$refs.mmm.panTo({
              lat: 47.912867,
              lng: 106.910723
            });
          },
        }
    };
  },
 

};
</script>
