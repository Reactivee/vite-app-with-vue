<script setup>
import nav_footer from "../data/nav_footer.js";
</script>

<template>
  <!-- Footer Start -->
  <footer class="py-5 px-12">
    <div class="container mx-auto px-5">
      <div class="grid">
        <div
          class="flex flex-col md:flex-row md:space-x-12 items-center justify-between"
        >
          <ul
            class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 text-xs text-center md:text-left font-theme-heading"
          >
            <template v-for="item in nav_footer" :key="item.id">
              <li
                class="text-black font-medium hover:text-blue-400 duration-200 font-bold hover:text-theme-secondary transition duration-200"
              >
                <a class="text-base" href="#" v-smooth-scroll>{{
                  item.name
                }}</a>
              </li>
            </template>
          </ul>
          <div>
            <h1 class="logo">Dispo</h1>
          </div>
          <div>
            <ul
              class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 text-xs text-center md:text-left font-theme-heading"
            >
              <li
                class="text-black font-medium hover:text-blue-400 duration-200 font-bold hover:text-theme-secondary transition duration-200"
              >
                <a class="text-base" href="#" v-smooth-scroll
                  >Terms of service</a
                >
              </li>
              <li
                class="text-black font-medium hover:text-blue-400 duration-200 font-bold hover:text-theme-secondary transition duration-200"
              >
                <a class="text-base" href="#" v-smooth-scroll>Privacy Policy</a>
              </li>
              <li
                class="text-black font-medium hover:text-blue-400 duration-200 font-bold hover:text-theme-secondary transition duration-200"
              >
                <a class="text-base" href="#" v-smooth-scroll>Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer End -->
</template>
<style>
footer {
  /* position: absolute !important; */
  /* bottom: 0; */
  /* left: 0; */
  /* right: 0; */
  /* background: red; */
}
.logo {
  font-size: 50px;
  font-weight: 700;
  color: #1c1756;
  letter-spacing: -5px;
}

</style>
