<script setup>
import { ref } from "vue";
import nav from "../data/nav.js";
let lang = ref(false);

</script>

<template>
  <!-- Navbar Start -->
  <div class="container mx-auto px-24">
    <header class="flex justify-between py-12 items-center">
      <div class="flex items-center">
        <h1 class="logo">Dispo</h1>
        <div class="currency flex items-center px-12">
          <span class="mr-2 lg:text-lg text-theme-grayish-blue font-semibold"
            >Euro</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-theme-grayish-blue"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="currency flex items-center relative">
          <span
            @click="lang = !lang"
            class="mr-2 lg:text-lg cursor-pointer text-theme-grayish-blue font-semibold"
            >English</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-theme-grayish-blue"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <div
            v-show="lang"
            class="right-0 z-10 mt-2 rounded-md bg-white focus:outline-none lang_drop"
          >
            <div class="py-1">
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm hover:text-black"
              s  >Russian</a
              >
            </div>
          </div>
        </div>
        <!-- <a href="/"><img src="/images/logo-bookmark.svg" alt="Site Logo"></a> -->
      </div>

      <nav class="flex justify-end flex-col md:flex-row">
        <!-- Desktop Menu -->
        <ul
          class="space-x-7 font-theme-heading font-medium items-center hidden md:flex flex-col space-y-7 md:space-y-0 md:flex-row"
        >
          <template v-for="item in nav" :key="item.id">
            <li class="hover:text-blue-400 duration-200 font-bold">
              <a href="#" v-smooth-scroll>{{ item.name }}</a>
            </li>
          </template>
          <li
            class="bg-indigo-900 px-6 py-1 text-white rounded-3xl shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200"
          >
            <a href="#download-section" v-smooth-scroll>Book today</a>
          </li>
          <li class="hover:text-blue-400 duration-200 font-bold">
            <a href="#" v-smooth-scroll>Logi in / Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <!-- Navbar End -->
</template>
<style scoped>
.logo {
  font-size: 50px;
  font-weight: 700;
  color: #1c1756;
  letter-spacing: -5px;
}
.lang_drop {
  position: absolute;
  top: 19px;
  width: 100%;
  left: -4px;
  right: 0;
  word-wrap: normal;
}
</style>
