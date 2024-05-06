<template>
  <div
    id="app"
    ref="app"
    class="h-[100vh] w-[100vw] overflow-auto bg-cover xl:bg-cennter text-white"
  >
    <date-and-time />
    <div
      class="mx-auto relative flex-wrap mt-8 xl:mt-0 w-full max-w-[1680px] lg:max-h-[700px] px-5 xl:px-[120px] xl:pt-[50px] xl:pb-[50px] xl:h-full flex xl:justify-between items-center"
    >
      <div
        class="information-tab mt-8 xl:mt-0 xl:relative order-2 xl:order-1 xl:px-[45px] xl:py-12 w-full h-[180px] xl:w-[23%] xl:h-full xl:rounded-2xl xl:[background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] xl:shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] xl:[backdrop-filter:blur(20px)] xl:border-[1px] xl:border-solid xl:border-gray"
      >
        <div
          class="rounded-2xl relative px-5 py-5 xl:px-0 xl:py-0 [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[1px] border-solid border-gray xl:rounded-none xl:shadow-none xl:bg-none xl:border-none xl:backdrop-opacity-0 xl:blur-none xl:border-0"
        >
          <div class="flex justify-between xl:justify-start items-center">
            <div class="flex items-center xl:block">
              <img
                src="../assets/images/home/rose.svg"
                alt=""
                class="w-[20px] xl:w-[65px]"
              />
              <span class="font-semibold text-[14px] ml-3 block xl:hidden">{{
                detailsData ? detailsData.Name : ""
              }}</span>
            </div>
            <div class="xl:ml-[28px]">
              <span class="font-bold text-[24px] hidden xl:block">{{
                detailsData ? detailsData.Name : ""
              }}</span>
              <span class="text-[14px] mr-2 xl:mr-0 xl:text-base">{{
                detailsData ? detailsData.Time : ""
              }}</span>
              <span class="text-[14px] xl:text-base xl:block">{{
                detailsData ? detailsData.Acreage : ""
              }}</span>
            </div>
          </div>
          <p
            class="text-justify mt-5 xl:mt-7 text-[16px] xl:text-[14px] overflow-scroll details-plant xl:max-h-[105px]"
          >
            {{ detailsData ? detailsData.Text : "" }}
          </p>
          <div
            class="absolute xl:hidden h-[0.5px] w-[310px] top-[55px] left-1/2 -translate-x-1/2 bg-white opacity-60"
          ></div>
        </div>
        <div
          class="absolute hidden xl:block w-[160px] h-[0.1px] opacity-50 bg-white top-[300px] left-1/2 -translate-x-1/2"
        ></div>
        <div
          class="flex justify-between mt-8 xl:mt-0 px-[30px] py-[40px] xl:px-0 xl:py-0 items-center rounded-2xl [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[1px] border-solid border-gray xl:rounded-none xl:shadow-none xl:bg-none xl:border-none xl:backdrop-opacity-0 xl:blur-none xl:border-0 xl:absolute xl:bottom-14 flex-wrap xl:right-[50px] xl:left-[50px]"
        >
          <div
            @click="onTemperatureDetails()"
            class="flex flex-col xl:flex-row w-[30%] xl:w-[35%] items-center xl:justify-between cursor-pointer hover:scale-110 transition"
          >
            <img
              src="../assets/images/home/temp.svg"
              alt=""
              class="w-10 xl:w-8"
            />
            <span class="block mt-2 xl:mt-0 xl:ml-3 text-[14px]"
              >{{ temp ? temp.value : "---" }}°C</span
            >
          </div>
          <div
            @click="onMoistureDetails()"
            class="flex flex-col xl:flex-row w-[30%] xl:w-[35%] items-center xl:justify-between cursor-pointer hover:scale-110 transition"
          >
            <img
              src="../assets/images/home/mois.svg"
              alt=""
              class="w-10 xl:w-8"
            />
            <span class="block mt-2 xl:mt-0 xl:ml-3 text-[14px]"
              >{{ mois ? mois.value : "---" }}%</span
            >
          </div>
          <div
            @click="onSoidDetails()"
            class="flex flex-col xl:flex-row w-[30%] xl:w-[35%] items-center xl:justify-between cursor-pointer hover:scale-110 transition xl:mt-12"
          >
            <img
              src="../assets/images/home/soil.svg"
              alt=""
              class="w-10 xl:w-8"
            />
            <span class="block mt-2 xl:mt-0 xl:ml-3 text-[14px]"
              >{{ soil ? soil.value : "---" }}%</span
            >
          </div>
          <div
            @click="onLightDetails()"
            class="flex flex-col xl:flex-row w-[30%] xl:w-[35%] items-center xl:justify-between cursor-pointer hover:scale-110 transition mt-10 xl:mt-12"
          >
            <img
              src="../assets/images/home/light.svg"
              alt=""
              class="w-10 xl:w-8"
            />
            <span class="block mt-2 xl:mt-0 xl:ml-3 text-[14px]">{{
              light ? light.value : "---"
            }}</span>
          </div>
          <div
            @click="onCo2Details()"
            class="flex flex-col xl:flex-row w-[30%] xl:w-[35%] items-center xl:justify-between cursor-pointer hover:scale-110 transition mt-10 xl:mt-12"
          >
            <img
              src="../assets/images/home/co2.svg"
              alt=""
              class="w-10 xl:w-8"
            />
            <span class="block mt-2 xl:mt-0 xl:ml-3 text-[14px]">{{
              co2 ? co2.value : "---"
            }}</span>
          </div>
          <div
            @click="onPhDetails()"
            class="flex flex-col xl:flex-row w-[30%] xl:w-[35%] items-center justify-between cursor-pointer hover:scale-110 transition mt-10 xl:mt-12"
          >
            <img src="../assets/images/home/ph.svg" alt="" class="w-8 xl:w-7" />
            <span class="block mt-2 xl:mt-0 xl:ml-3 text-[14px]">{{
              ph ? ph.value : "---"
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="camera-tab overflow-hidden order-1 xl:order-2 w-full h-auto xl:w-[50%] xl:h-full rounded-2xl flex flex-col justify-between"
      >
        <div class="">
          <div class="relative">
            <div
              class="swiper-container cursor-pointer overflow-hidden rounded-2xl"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="video in videos" :key="video">
                  <div
                    class="h-[242px] xl:h-[430px] w-full rounded-2xl relative"
                  >
                    <img
                      :src="video"
                      class="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="flex justify-between xl:h-[420px] flex-wrap items-center w-full"
                  >
                    <div
                      v-for="(video, index) in videos"
                      :key="index"
                      :class="{ 'mt-[10px] xl:mt-2': index >= 2 }"
                      class="h-[116px] xl:h-[205px] w-[48.4%] xl:w-[49.1%] rounded-2xl relative"
                    >
                      <img
                        :src="video"
                        class="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="swiper-pagination flex gap-5 xl:gap-12 justify-center absolute left-1/2 -translate-x-1/2"
            ></div>
          </div>
          <div class="swiper-button-next">
            <img
              src="../assets/images/home/arrow-right.svg"
              alt=""
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div class="swiper-button-prev">
            <img
              src="../assets/images/home/arrow-left.svg"
              alt=""
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div
          class="hidden relative xl:flex justify-between items-center px-10 py-7 xl:h-[100px] w-full [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[1px] border-solid border-gray xl:rounded-2xl"
        >
          <img
            :src="`${logIconUrl}`"
            @click="scrollToEnd()"
            alt=""
            class="w-7 cursor-pointer"
          />
          <div
            ref="scrollableDiv"
            @mousedown="handleMouseDown"
            @mouseleave="handleMouseLeave"
            @mouseup="handleMouseUp"
            @mousemove="handleMouseMove"
            class="log cursor-pointer flex gap-10 items-center w-[88%] overflow-x-scroll"
          >
            <div
              v-for="(item, index) in logData"
              :key="index"
              class="text-center log-item"
            >
              <span class="block font-semibold"
                >{{ formatDate(item.timeStamp) }}
              </span>
              <span class="block mt-2"
                >{{ item.value ? item.value : "---" }}{{ unit }}</span
              >
            </div>
          </div>
          <div
            class="absolute w-[0.5px] left-[88px] h-[50px] opacity-60 bg-white"
          ></div>
          <img
            v-if="!isAtStart"
            @click="scrollToStart()"
            src="../assets/images/home/go-to-end.svg"
            alt=""
            class="absolute left-[100px] rotate-180 w-8 opacity-15 hover:opacity-100 cursor-pointer transition"
          />
          <img
            v-if="!isAtEnd && isAtStart"
            @click="scrollToEnd()"
            src="../assets/images/home/go-to-end.svg"
            alt=""
            class="absolute right-10 w-8 opacity-15 hover:opacity-100 cursor-pointer transition"
          />
        </div>
      </div>
      <div
        class="forecast-tab mb-14 xl:mb-0 order-3 xl:relative mt-[325px] xl:mt-0 xl:order-3 xl:px-[50px] xl:pb-12 xl:pt-10 w-full xl:w-[23%] xl:h-full xl:rounded-2xl xl:[background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] xl:shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] xl:[backdrop-filter:blur(20px)] xl:border-[1px] xl:border-solid xl:border-gray"
      >
        <div
          class="px-5 pt-6 pb-8 xl:px-0 xl:py-0 rounded-2xl [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[1px] border-solid border-gray xl:rounded-none xl:shadow-none xl:bg-none xl:border-none xl:backdrop-opacity-0 xl:blur-none xl:border-0"
        >
          <div class="font-bold text-[24px] mb-3 xl:mb-4">Dự đoán bệnh</div>
          <div
            v-for="(disease, index) in diseases"
            :key="index"
            :class="{
              'mt-5 xl:mt-6': index !== 0,
              'shaking-1': disease.percent > 80,
            }"
            class=""
          >
            <span class="xl:font-semibold">{{ disease.name }}</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white xl:mt-[10px] rounded-[10px] overflow-hidden"
            >
              <div
                :style="{
                  width: disease.percent + '%',
                }"
                class="absolute xl:h-[40px] transition-width ease-in-out duration-500 h-9 xl:mt-0 flex items-center justify-end top-1/2 left-0 -translate-y-1/2 bg-white"
              ></div>
              <span
                :class="{
                  'text-day': dayNightStatus === 'Day' && disease.percent >= 9,
                  'text-night':
                    dayNightStatus === 'Night' && disease.percent >= 9,
                  'text-white': disease.percent <= 8,
                }"
                class="block absolute top-1/2 -translate-y-1/2 left-4"
                >{{ disease.percent }}%</span
              >
            </div>
          </div>
        </div>
        <div
          class="absolute hidden xl:block h-[0.5px] w-[140px] bottom-[120px] left-1/2 -translate-x-1/2 bg-white opacity-60"
        ></div>
        <button
          @click="onToggleModal()"
          :class="{
            'xl:hover:text-day': dayNightStatus === 'Day',
            'xl:hover:text-night': dayNightStatus === 'Night',
          }"
          class="w-full xl:mt-14 mt-8 h-[56px] rounded-[20px] font-semibold xl:bottom-14 xl:font-semibold tracking-wide [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-solid border-gray xl:shadow-none xl:bg-none xl:backdrop-opacity-0 xl:blur-none xl:text-[14px] flex items-center justify-center xl:h-12 border-[0.5px] xl:rounded-[12px] xl:border-white xl:hover:bg-white cursor-pointer transition"
        >
          XEM CÁCH KHẮC PHỤC
        </button>
      </div>
    </div>
    <div
      v-if="isOpenModal"
      class="fixed z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] modal"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[353px] px-7 pt-14 pb-8 xl:px-[60px] xl:py-[60px] overflow-hidden rounded-[20px] xl:rounded-[24px] bg-[#F8F8F8] text-[#1F1F1F] xl:h-[500px] xl:w-[750px]"
      >
        <img
          @click="onToggleModal()"
          src="../assets/images/home/close.svg"
          alt=""
          class="absolute top-6 right-6 w-7 cursor-pointer"
        />
        <div class="">
          <h2 class="text-center font-bold text-[24px]">CÁCH KHẮC PHỤC</h2>
          <div class="mt-3 xl:mt-5 overflow-y-scroll h-[335px] modal">
            <p class="text-justify pr-4 flex flex-wrap justify-between">
              <span
                v-if="fixData && fixData.detail"
                v-html="fixData.detail"
              ></span>
              <span
                v-if="fixData && fixData.solution"
                v-html="fixData.solution"
              ></span>
              <img
                v-if="fixData && fixData.image"
                :src="fixData.image"
                alt=""
                class="my-2 w-full"
              />
              <iframe
                class="my-2 w-full xl:w-[605px] xl:h-[315px]"
                v-if="fixData && fixData.video"
                :src="fixData.video"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!isOpenChatBox"
      @click="onToggleChat()"
      class="absolute cursor-pointer bottom-6 right-6 xl:bottom-6 xl:right-14 animate-bounce hover:animate-none"
    >
      <img
        src="../assets/images/home/chatbot-logo.svg"
        alt=""
        class="w-[74px] xl:w-24 hover:xl:w-[100px] transition-width ease-in-out duration-500"
      />
    </div>
    <chat-box v-if="isOpenChatBox" :isOpenChatBox="isOpenChatBox" />
  </div>
</template>

<script>
import { ref, reactive, provide, onMounted } from "vue";
import { useRouter } from "vue-router";
import DateAndTime from "@/components/DateAndTime.vue";
import ChatBox from "@/components/ChatBox.vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { useDatabase } from "@/composables/useDatabase";
import { useDetails } from "@/composables/useDetails";
import { useFix } from "@/composables/useFix";
import { useSensor } from "@/composables/useSensor";
import { useSignOut } from "@/composables/useSignOut";

export default {
  name: "HomeView",
  components: {
    DateAndTime,
    ChatBox,
  },
  setup() {
    const app = ref(null);
    const swiper = ref(null);
    const dayNightStatus = ref("");
    const logIconUrl = ref(require("@/assets/images/home/temp.svg"));
    const isOpenChatBox = ref(false);
    const isOpenModal = ref(false);
    const temp = ref(null);
    const mois = ref(null);
    const soil = ref(null);
    const light = ref(null);
    const co2 = ref(null);
    const ph = ref(null);
    const unit = ref("°C");
    const path = ref("Sensor/temperature");
    const fixData = ref(null);
    const fixPath = ref("fix/Rose/PhanTrang");
    const { logData } = useDatabase(path.value);
    const { detailsData } = useDetails();
    const { readFix } = useFix();
    const { readDatabase } = useSensor();
    const { signout } = useSignOut();
    const isDown = ref(false);
    const startX = ref(0);
    const scrollLeft = ref(0);
    const scrollableDiv = ref(null);
    const isAtStart = ref(true);
    const isAtEnd = ref(false);

    const router = useRouter();

    const diseases = ref([
      { name: "Hoa Hồng - Đốm Lá", percent: "0" },
      { name: "Hoa Hồng - Thán Thư", percent: "0" },
      { name: "Hoa Hồng - Gỉ Sét", percent: "0" },
      { name: "Hoa Hồng - Ăn Lá", percent: "0" },
    ]);
    let model;
    let maxPredictions;

    const URL = "https://teachablemachine.withgoogle.com/models/NC6u90OFd/";

    const videos = reactive([
      require("@/assets/images/home/pic2.jpeg"),
      require("@/assets/images/home/pic1.jpg"),
      "http://35.198.245.86/camera1/",
      "http://35.198.245.86/camera2/",
    ]);

    async function initSwiper() {
      swiper.value = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }

    async function initPredict() {
      try {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await window.tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        setInterval(predict, 1000);
      } catch (error) {
        console.log(error);
      }
    }

    async function predict() {
      try {
        const arr = [];
        const activeSlideIndex = swiper.value.activeIndex;
        const activeSlide = swiper.value.slides[activeSlideIndex];
        const img = activeSlide.querySelector("img");
        const prediction = await model.predict(img);
        for (let i = 0; i < maxPredictions; i++) {
          const obj = {
            name: prediction[i].className,
            percent: Math.ceil(prediction[i].probability * 100),
          };
          arr.push(obj);
        }
        diseases.value = [...arr];
      } catch (error) {
        console.log(error);
      }
    }

    function updateRealTime() {
      const time = new Date();
      const hours = time.getHours();

      if (hours >= 6 && hours < 18) {
        dayNightStatus.value = "Day";
      } else {
        dayNightStatus.value = "Night";
      }

      updateBg();
    }

    function updateBg() {
      const imagePath =
        dayNightStatus.value === "Day"
          ? require("@/assets/images/home/bg1.svg")
          : require("@/assets/images/home/bg2.svg");
      if (dayNightStatus.value === "Day") {
        if (app.value) {
          app.value.setAttribute(
            "style",
            `background-image: url("${imagePath}")`
          );
        }
      } else {
        if (app.value) {
          app.value.setAttribute(
            "style",
            `background-image: url("${imagePath}")`
          );
        }
      }
    }

    async function getSensor() {
      try {
        co2.value = await readDatabase("Sensor/carbondioxitLevel");
        ph.value = await readDatabase("Sensor/phLevel");
        temp.value = await readDatabase("Sensor/temperature");
        soil.value = await readDatabase("Sensor/osmoticPressure");
        mois.value = await readDatabase("Sensor/humidity");
        light.value = await readDatabase("Sensor/lightIntensity");
      } catch (error) {
        console.log("Cannot get data sensor");
      }
    }

    function onToggleChat() {
      isOpenChatBox.value = !isOpenChatBox.value;
    }

    provide("onToggleChat", onToggleChat);

    async function onToggleModal() {
      isOpenModal.value = !isOpenModal.value;
      const maxPercentDisease = findMaxPercent();
      if (maxPercentDisease.name === "Hoa Hồng - Đốm Lá") {
        try {
          fixPath.value = "fix/Rose/DomLa";
          fixData.value = await readFix(fixPath.value);
        } catch (error) {
          console.log(error);
        }
      } else if (maxPercentDisease.name === "Hoa Hồng - Thán Thư") {
        try {
          fixPath.value = "fix/Rose/ThanThu";
          fixData.value = await readFix(fixPath.value);
        } catch (error) {
          console.log(error);
        }
      } else if (maxPercentDisease.name === "Hoa Hồng - Gỉ sét") {
        try {
          fixPath.value = "fix/Rose/GiSet";
          fixData.value = await readFix(fixPath.value);
        } catch (error) {
          console.log(error);
        }
      } else if (maxPercentDisease.name === "Hoa hồng - Ăn lá") {
        try {
          fixPath.value = "fix/Rose/AnLa";
          fixData.value = await readFix(fixPath.value);
        } catch (error) {
          console.log(error);
        }
      } else {
        fixData.value = {
          detail: "Không có dữ liệu dự đoán.",
          solution: null,
          image: null,
          video: null,
        };
      }
    }

    function onTemperatureDetails() {
      logIconUrl.value = require("@/assets/images/home/temp.svg");
      path.value = "Sensor/temperature";
      useDatabase(path.value);
      unit.value = "°C";
    }

    function onMoistureDetails() {
      logIconUrl.value = require("@/assets/images/home/mois.svg");
      path.value = "Sensor/humidity";
      useDatabase(path.value);
      unit.value = "%";
    }

    function onSoidDetails() {
      logIconUrl.value = require("@/assets/images/home/soil.svg");
      path.value = "Sensor/osmoticPressure";
      useDatabase(path.value);
      unit.value = "%";
    }

    function onLightDetails() {
      logIconUrl.value = require("@/assets/images/home/light.svg");
      path.value = "Sensor/lightIntensity";
      useDatabase(path.value);
      unit.value = "";
    }

    function onCo2Details() {
      logIconUrl.value = require("@/assets/images/home/co2.svg");
      path.value = "Sensor/carbondioxitLevel";
      useDatabase(path.value);
      unit.value = "";
    }

    function onPhDetails() {
      logIconUrl.value = require("@/assets/images/home/ph.svg");
      path.value = "Sensor/phLevel";
      useDatabase(path.value);
      unit.value = "";
    }

    const handleMouseDown = (event) => {
      updateScrollState();
      isDown.value = true;
      startX.value = event.pageX - scrollableDiv.value.offsetLeft;
      scrollLeft.value = scrollableDiv.value.scrollLeft;
    };

    const handleMouseLeave = () => {
      updateScrollState();
      isDown.value = false;
    };

    const handleMouseUp = () => {
      updateScrollState();
      isDown.value = false;
    };

    const handleMouseMove = (event) => {
      updateScrollState();
      if (!isDown.value) return;
      event.preventDefault();
      const x = event.pageX - scrollableDiv.value.offsetLeft;
      const walk = (x - startX.value) * 1;
      scrollableDiv.value.scrollLeft = scrollLeft.value - walk;
    };

    const updateScrollState = () => {
      const scrollableWidth =
        scrollableDiv.value.scrollWidth - scrollableDiv.value.clientWidth;
      if (scrollableDiv.value.scrollLeft === 0) {
        isAtStart.value = true;
        isAtEnd.value = false;
      } else if (scrollableDiv.value.scrollLeft === scrollableWidth) {
        isAtStart.value = false;
        isAtEnd.value = true;
      } else {
        isAtStart.value = false;
        isAtEnd.value = false;
      }
    };

    const scrollToStart = () => {
      updateScrollState();
      smoothScroll(scrollableDiv.value, 0, 500);
    };

    const scrollToEnd = () => {
      updateScrollState();
      smoothScroll(scrollableDiv.value, scrollableDiv.value.scrollWidth, 500);
    };

    const smoothScroll = (element, to, duration) => {
      const start = element.scrollLeft;
      const change = to - start;
      const increment = 20;

      const animateScroll = (elapsedTime) => {
        elapsedTime += increment;
        const position = easeInOut(elapsedTime, start, change, duration);
        element.scrollLeft = position;
        if (elapsedTime < duration) {
          setTimeout(() => {
            animateScroll(elapsedTime);
          }, increment);
        }
      };

      animateScroll(0);
    };

    const easeInOut = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    function findMaxPercent() {
      let maxPercentObj = diseases.value[0];
      for (let i = 1; i < diseases.value.length; i++) {
        if (
          parseFloat(diseases.value[i].percent) >
          parseFloat(maxPercentObj.percent)
        ) {
          maxPercentObj = diseases.value[i];
        }
      }
      return maxPercentObj;
    }

    function formatDate(timestamp) {
      const parsedTimestamp = parseInt(timestamp);

      const date = new Date(parsedTimestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedHours = hours < 10 ? "0" + hours : hours;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      return `${formattedHours}:${formattedMinutes}`;
    }

    async function logOut() {
      await signout();
      router.push({ name: "SignIn", params: {} });
    }

    onMounted(() => {
      initPredict();
      setInterval(getSensor, 1000);
      initSwiper();
      updateRealTime();
      setInterval(updateRealTime, 1000);
    });

    return {
      app,
      dayNightStatus,
      detailsData,
      diseases,
      fixData,
      fixPath,
      logData,
      logIconUrl,
      isAtStart,
      isAtEnd,
      isOpenChatBox,
      isOpenModal,
      path,
      videos,
      scrollableDiv,
      scrollLeft,
      temp,
      mois,
      soil,
      light,
      co2,
      ph,
      swiper,
      unit,
      formatDate,
      findMaxPercent,
      handleMouseDown,
      handleMouseLeave,
      handleMouseUp,
      handleMouseMove,
      initSwiper,
      logOut,
      onToggleChat,
      onToggleModal,
      onTemperatureDetails,
      onMoistureDetails,
      onSoidDetails,
      onLightDetails,
      onCo2Details,
      onPhDetails,
      scrollToStart,
      scrollToEnd,
      updateBg,
    };
  },
};
</script>

<style lang="css">
.swiper-pagination {
  bottom: -40px !important;
}

.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  opacity: 0.4;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.swiper-pagination-bullet-active {
  background-color: #fff;
  opacity: 0.8;
}

.swiper-button-prev {
  width: 70px;
  height: 70px;
  background: linear-gradient(
    168.26deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.15)
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-160%);
  left: 405px;
  z-index: 10;
  border-radius: 50%;
}

.swiper-button-next {
  width: 70px;
  height: 70px;
  background: linear-gradient(
    168.26deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.15)
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-160%);
  right: 405px;
  border-radius: 50%;
  z-index: 10;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: linear-gradient(
    168.26deg,
    rgba(255, 255, 255, 0.35),
    rgba(255, 255, 255, 0.2)
  );
}

@media only screen and (max-width: 1279px) {
  .swiper-pagination {
    bottom: 16px !important;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #ffffff;
    opacity: 0.4;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  /* Quy tắc CSS cho bullet active */
  .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 0.8;
  }

  .swiper-button-prev {
    display: none;
  }

  .swiper-button-next {
    display: none;
  }
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(3px);
  }
  75% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(0);
  }
}

.shaking-1 {
  animation: shake 0.5s;
}
</style>
