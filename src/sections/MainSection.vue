<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";
import { ref, computed } from "vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    const swiper = useSwiper();

    const dates = [
      { date: "6 November" },
      { date: "6 November" },
      { date: "6 November" },
      { date: "6 November" },
      { date: "6 November" },
      { date: "6 November" },
      { date: "6 November" },
      { date: "6 November" },
      // Add more images as needed with their URLs
    ];
   
    return {
      swiper,
      dates,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<template>
  <!-- Hero Section Start -->
  <div
    class="container relative mx-auto rounded-3xl bg-white overflow-x-hidden lg:overflow-x-visible wrapper"
  >
    <div class="bg-white rounded-3xl mt-12">
      <!-- Top section -->
      <div class="details bg-violet-950 py-10 rounded-3xl">
        <h2 class="text-3xl font-semibold text-white text-center">
          Your daily rental details
        </h2>
        <div
          class="additional_information flex text-white justify-center items-center mt-5"
        >
          <div
            class="additional_information__item mr-2 flex border-transparent hover:border-current transition border-2 px-4 py-2 rounded-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>

            Request
          </div>
          <div
            class="additional_information__item mr-2 flex border-transparent hover:border-current transition border-2 px-4 py-2 rounded-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>

            Trip start:18 feb - 11:00
          </div>
          <div
            class="additional_information__item mr-2 flex border-transparent hover:border-current transition border-2 px-4 py-2 rounded-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            45 people
          </div>
          <div
            class="additional_information__item mr-2 flex border-transparent hover:border-current transition border-2 px-4 py-2 rounded-3xl"
          >
            Paid 12$
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2 font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <a class="ml-4" href="#"> view invoice </a>
        </div>
        <p class="flex justify-center text-gray-400 mt-3 cursor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
            />
          </svg>
          Copy your unique trip link
        </p>
      </div>

      <div
        class="bg-white drop-shadow my-10 rounded-3xl px-10 container mx-auto bottom_content"
      >
        <div class="grid grid-cols-3 py-20 gap-4">
          <!-- Left table -->
          <div class="user_profile grid">
            <div class="user_img border-r-2">
              <div class="status text-sky-500 font-bold text-sm">Active</div>
              <div class="text-black font-bold text-2xl mb-3">Chauffeur</div>
              <div>
                <img
                  src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
                  width="160"
                  height="160"
                  class="rounded-3xl"
                  alt="user"
                />
              </div>
              <div class="font-bold text-black mt-3 text-xl">Adam Lopoto</div>
              <div class="start flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 border-0 mr-2 fill-yellow-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span class="font-bold">4.8</span>
              </div>
            </div>
            <div class="user_info pl-6">
              <div>
                <p class="text-slate-500 font-semibold">Name of Courier</p>
                <span class="font-bold text-black mt-3 text-xl"
                  >Adam Lopoto</span
                >
              </div>
              <div class="mt-5">
                <p class="text-slate-500 font-semibold">National reg.nb</p>
                <span class="font-bold text-black mt-3 text-xl">"Miranda"</span>
              </div>
              <div class="bg-blue-500 mt-4 inline-flex p-5 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 stroke-white-500 fill-white-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
            </div>
            <div class="col-span-2 mt-10">
              <div class="list_process flex items-center">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  class="fill-slate-300 mr-3"
                >
                  <g>
                    <circle
                      opacity="0.5"
                      cx="12"
                      cy="12"
                      r="10"
                      class="fill-blue-600"
                    ></circle>
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <p class="text-black font-bold mr-2">
                  Waiting Chauffeur -
                  <span class="text-gray-400 font-bold"
                    >14.06.2022 at 12.32</span
                  >
                </p>
              </div>

              <div class="list_process flex items-center">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  class="fill-slate-300 mr-3"
                >
                  <g>
                    <circle
                      opacity="0.5"
                      cx="12"
                      cy="12"
                      r="10"
                      class="fill-blue-600"
                    ></circle>
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <p class="text-black font-bold mr-2">
                  Chauffeur assigned -
                  <span class="text-gray-400 font-bold"
                    >14.06.2022 at 12.32</span
                  >
                </p>
              </div>
              <div class="list_process flex items-center">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  class="fill-slate-300 mr-3"
                >
                  <g>
                    <circle
                      opacity="0.5"
                      cx="12"
                      cy="12"
                      r="10"
                      class="fill-blue-600"
                    ></circle>
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <p class="text-black font-bold mr-2">
                  Started -
                  <span class="text-gray-400 font-semibold"
                    >14.06.2022 at 12.32</span
                  >
                </p>
              </div>
              <div class="list_process flex items-center">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  class="fill-slate-300 mr-3"
                >
                  <g>
                    <circle
                      opacity="0.5"
                      cx="12"
                      cy="12"
                      r="10"
                      class="fill-gray-300"
                    ></circle>
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <p class="text-black font-bold mr-2">Trip progress</p>
              </div>
              <div class="list_process flex items-center">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  class="fill-slate-300 mr-3"
                >
                  <g>
                    <circle
                      opacity="0.5"
                      cx="12"
                      cy="12"
                      r="10"
                      class="fill-gray-300"
                    ></circle>
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <p class="text-black font-bold mr-2">Finished</p>
              </div>
            </div>
          </div>

          <div class="col-span-2 pl-10">
            <div class="flex border-b-2 pb-10">
              <button
                class="px-12 py-3 border_line w-full ml-20 mr-3 border-slate-300 text-black font-bold rounded-3xl border-2 border-transparent hover:border-theme-indigo hover:bg-indigo-900 hover:text-white cursor-pointer transition duration-200"
              >
                Trip details
              </button>
              <button
                class="px-12 py-3 w-full border_line mr-20 ml-3 border-slate-300 text-black font-bold rounded-3xl border-2 border-transparent hover:border-theme-indigo hover:bg-indigo-900 hover:text-white cursor-pointer transition duration-200"
              >
                Return trip details
              </button>
            </div>

            <!-- swiper -->
            <div class="px-1 relative">
              <swiper
                :slides-per-view="4"
                :space-between="1"
                :modules="modules"
                :navigation="true"
                class="mySwiper mt-5 pb-4"
              >
                <template v-for="(slide, index) in dates" :key="index">
                  <swiper-slide class="slider">
                    <button
                      class="btn-slide py-3 border_line border-slate-300 text-black rounded-3xl border-2 border-transparent hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200"
                    >
                      {{ slide.date }}
                    </button>
                  </swiper-slide>
                </template>
              </swiper>
            </div>
            <div class="flex mt-8 flex-row mb-10">
              <div class="basis-1/2">
                <div class="locate_items flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                    stroke-width="2.5"
                    stroke="black"
                    class="w-10 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p
                    class="font-bold line-clamp-1 hover:line-clamp-none hover:cursor-pointer"
                  >
                    Riga international airport
                    <span class="text-gray-400"
                      >P133, Marupa, Lv-1050asdasdas P133, Marupa,
                      Lv-1050asdasdas</span
                    >
                  </p>
                </div>
              </div>
              <div class="basis-1/4">
                <div class="clock_item flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="black"
                    class="w-6 h-6 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="font-bold">Arrive: 17:20</span>
                </div>
              </div>
              <div class="basis-1/4">
                <div class="clock_item flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="black"
                    class="w-6 h-6 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="font-bold">Depart: 17:20</span>
                </div>
              </div>
            </div>

            <!-- Map -->
            <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3A8771966f064672b1228893a04d4cde6c25ce6ea46c0d91efdec5276ad3e0e8d2&amp;source=constructor"
              width="100%"
              height="421"
              frameborder="0"
              class="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Hero Section End -->
</template>

<style>
.wrapper {
  margin-top: 100px;
  padding: 68px 0 94px 0;
}
.btn-slide {
  width: 150px;
}
.slider {
  width: 160px !important;
}

.details {
  left: 50px;
  position: absolute;
  top: -74px;
  right: 50px;
  min-height: 230px;
}
.bottom_content {
  top: 110px;
  right: 50px;
  width: 80%;
  margin: 0 auto;
}
.swiper-wrapper {
  padding: 10px 0;
}
.swiper-button-prev,
.swiper-button-next {
  background: white !important;
  padding: 40px 30px;
  opacity: 1 !important;
  top: 20px !important;
  box-shadow: 0 -1px 31px -10px rgba(137, 137, 137, 0.37);
  -webkit-box-shadow: 0 -1px 31px -10px rgba(137, 137, 137, 0.37);
  -moz-box-shadow: 0 -1px 31px -10px rgba(137, 137, 137, 0.37);
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
.list_process {
  line-height: 40px;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  background: rgb(232, 232, 232);
  border-radius: 50%;
  padding: 13px 19px;
  color: black;
  font-size: 19px;
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
}
.border_line {
  border: 2px solid rgb(196, 196, 196);
}
</style>
