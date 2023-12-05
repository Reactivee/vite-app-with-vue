import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import GmapCluster from "vue2-google-maps/dist/components/cluster"; // replace src with dist if you have Babel issues

let app = createApp(App);

app.use(VueSmoothScroll);
app.use(GmapCluster, {
  load: {
    key: "AIzaSyC4HKfavBAaIgIGJCQ_zhly1V1yfjehW_E",
    libraries: "places", // This is required if you use the Autocomplete plugin
  },
});

app.mount("#app");
