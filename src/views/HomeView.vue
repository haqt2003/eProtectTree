<template>
  <div
    id="app"
    ref="app"
    class="h-[100vh] w-[100vw] overflow-auto bg-cover lg:bg-cennter text-white"
  >
    <div class="lg:hidden mx-auto mt-10 text-center">
      <span class="font-semibold">eProtectTree</span>
      <span class="block mt-1">{{ formattedDate }}</span>
    </div>
    <div
      class="mx-auto flex-wrap mt-8 lg:mt-0 w-full lg:max-h-[730px] max-w-[1680px] px-5 lg:px-[120px] lg:pt-[55px] lg:pb-[76px] lg:h-full flex lg:justify-between items-center"
    >
      <div
        class="information-tab mt-8 lg:mt-0 lg:relative order-2 lg:order-1 lg:px-[50px] lg:py-12 w-full h-[180px] lg:w-[23%] lg:h-full lg:rounded-2xl lg:[background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] lg:shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] lg:[backdrop-filter:blur(20px)] lg:border-[1px] lg:border-solid lg:border-gray"
      >
        <div
          class="rounded-2xl relative px-5 py-5 lg:px-0 lg:py-0 [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[1px] border-solid border-gray lg:rounded-none lg:shadow-none lg:bg-none lg:border-none lg:backdrop-opacity-0 lg:blur-none lg:border-0"
        >
          <div class="flex justify-between lg:justify-start items-center">
            <div class="flex items-center lg:block">
              <img
                src="../assets/images/rose.svg"
                alt=""
                class="w-[20px] lg:w-[75px]"
              />
              <span class="font-semibold text-[14px] ml-3 block lg:hidden"
                >Hoa hồng</span
              >
            </div>
            <div class="lg:ml-[18px]">
              <span class="font-bold text-[22px] hidden lg:block"
                >Hoa hồng</span
              >
              <span class="text-[14px] lg:text-base">8 tháng</span>
            </div>
          </div>
          <p class="text-justify mt-5 lg:mt-7 text-[16px] lg:text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Sagittis tristique leo
            egestas faucibus posuere eu commodo dui volutpat. Facilisi malesuada
          </p>
          <div
            class="absolute lg:hidden h-[0.5px] w-[310px] top-[55px] left-1/2 -translate-x-1/2 bg-white opacity-60"
          ></div>
        </div>
        <div
          class="absolute hidden lg:block w-[160px] h-[0.1px] opacity-50 bg-white top-[300px] left-1/2 -translate-x-1/2"
        ></div>
        <div
          class="flex justify-between mt-8 lg:mt-0 px-[30px] py-[40px] lg:px-0 lg:py-0 items-center rounded-2xl [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[1px] border-solid border-gray lg:rounded-none lg:shadow-none lg:bg-none lg:border-none lg:backdrop-opacity-0 lg:blur-none lg:border-0 lg:absolute lg:bottom-14 flex-wrap lg:right-[50px] lg:left-[50px]"
        >
          <div
            class="flex flex-col lg:flex-row w-[30%] lg:w-auto items-center lg:justify-between cursor-pointer"
          >
            <img src="../assets/images/temp.svg" alt="" class="w-10 lg:w-8" />
            <span class="block mt-2 lg:mt-0 lg:ml-3 text-[14px]">15°C</span>
          </div>
          <div
            class="flex flex-col lg:flex-row w-[30%] lg:w-auto items-center lg:justify-between cursor-pointer"
          >
            <img src="../assets/images/mois.svg" alt="" class="w-10 lg:w-8" />
            <span class="block mt-2 lg:mt-0 lg:ml-3 text-[14px]">30%</span>
          </div>
          <div
            class="flex flex-col lg:flex-row w-[30%] lg:w-auto items-center lg:justify-between cursor-pointer lg:mt-12"
          >
            <img src="../assets/images/soil.svg" alt="" class="w-10 lg:w-8" />
            <span class="block mt-2 lg:mt-0 lg:ml-3 text-[14px]">60%</span>
          </div>
          <div
            class="flex flex-col lg:flex-row w-[30%] lg:w-auto items-center lg:justify-between cursor-pointer mt-10 lg:mt-12"
          >
            <img src="../assets/images/light.svg" alt="" class="w-10 lg:w-8" />
            <span class="block mt-2 lg:mt-0 lg:ml-3 text-[14px]">350</span>
          </div>
          <div
            class="flex flex-col lg:flex-row w-[30%] lg:w-auto items-center lg:justify-between cursor-pointer mt-10 lg:mt-12"
          >
            <img src="../assets/images/co2.svg" alt="" class="w-10 lg:w-8" />
            <span class="block mt-2 lg:mt-0 lg:ml-3 text-[14px]">400</span>
          </div>
          <div
            class="flex flex-col lg:flex-row w-[30%] lg:w-auto items-center justify-between cursor-pointer mt-10 lg:mt-12"
          >
            <img src="../assets/images/ph.svg" alt="" class="w-8 lg:w-7" />
            <span class="block mt-2 lg:mt-0 lg:ml-3 text-[14px]">6,5</span>
          </div>
        </div>
      </div>
      <div
        class="camera-tab order-1 lg:order-2 w-full h-auto lg:w-[50%] lg:h-full rounded-2xl flex flex-col justify-between"
      >
        <div class="">
          <div
            class="h-[242px] lg:h-[420px] w-full rounded-2xl bg-black relative"
          >
            <div
              class="hidden lg:block w-[70px] h-[70px] [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] cursor-pointer absolute top-1/2 -translate-y-1/2 -left-8 rounded-full"
            >
              <img
                src="../assets/images/arrow-left.svg"
                alt=""
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div
              class="hidden lg:block w-[70px] h-[70px] [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] cursor-pointer absolute top-1/2 -translate-y-1/2 -right-8 z-10 rounded-full"
            >
              <img
                src="../assets/images/arrow-right.svg"
                alt=""
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <Swiper>
            <SwiperSlide></SwiperSlide>
          </Swiper>
          <div class="flex gap-5 lg:gap-12 justify-center mt-5">
            <div
              class="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full cursor-pointer"
            ></div>
            <div
              class="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full cursor-pointer opacity-40"
            ></div>
            <div
              class="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full cursor-pointer opacity-40"
            ></div>
            <div
              class="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full cursor-pointer opacity-40"
            ></div>
            <div
              class="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full cursor-pointer opacity-40"
            ></div>
          </div>
        </div>
        <div
          class="hidden relative lg:flex justify-between items-center px-10 py-7 lg:h-[100px] w-full [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[1px] border-solid border-gray lg:rounded-2xl"
        >
          <img
            src="../assets/images/light.svg"
            alt=""
            class="w-7 cursor-pointer"
          />
          <div class="flex justify-between items-center w-[88%]">
            <div class="text-center">
              <span class="block font-semibold">11:30</span>
              <span class="block mt-2">28%</span>
            </div>
            <div class="text-center">
              <span class="block font-semibold">11:30</span>
              <span class="block mt-2">28%</span>
            </div>
            <div class="text-center">
              <span class="block font-semibold">11:30</span>
              <span class="block mt-2">28%</span>
            </div>
            <div class="text-center">
              <span class="block font-semibold">11:30</span>
              <span class="block mt-2">28%</span>
            </div>
            <div class="text-center">
              <span class="block font-semibold">11:30</span>
              <span class="block mt-2">28%</span>
            </div>
            <div class="text-center">
              <span class="block font-semibold">11:30</span>
              <span class="block mt-2">28%</span>
            </div>
            <div class="text-center">
              <span class="block font-semibold">11:30</span>
              <span class="block mt-2">---</span>
            </div>
          </div>
          <div
            class="absolute w-[0.5px] left-[88px] h-[50px] opacity-60 bg-white"
          ></div>
        </div>
      </div>
      <div
        class="forecast-tab mb-14 lg:mb-0 order-3 lg:relative mt-[325px] lg:mt-0 lg:order-3 lg:px-[50px] lg:pb-12 lg:pt-10 w-full lg:w-[23%] lg:h-full lg:rounded-2xl lg:[background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] lg:shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] lg:[backdrop-filter:blur(20px)] lg:border-[1px] lg:border-solid lg:border-gray"
      >
        <div
          class="px-5 pt-6 pb-8 lg:px-0 lg:py-0 rounded-2xl [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[1px] border-solid border-gray lg:rounded-none lg:shadow-none lg:bg-none lg:border-none lg:backdrop-opacity-0 lg:blur-none lg:border-0"
        >
          <div class="">
            <span class="lg:font-semibold">Đốm lá</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] transition w-[70%] h-9 lg:mt-0 flex items-center justify-end top-1/2 -translate-y-1/2 bg-white rounded-[9px] mr-3"
              ></div>
              <span
                :class="{
                  'text-day': dayNightStatus === 'Day',
                  'text-night': dayNightStatus === 'Night',
                }"
                class="block absolute top-1/2 -translate-y-1/2 left-4"
                >70%</span
              >
            </div>
          </div>
          <div class="mt-5">
            <span class="lg:font-semibold">Thán thư</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] transition h-9 lg:mt-0 flex items-center justify-end top-1/2 -translate-y-1/2 bg-white rounded-[9px] mr-3"
              ></div>
              <span
                class="block absolute top-1/2 -translate-y-1/2 left-4 text-white"
                >0%</span
              >
            </div>
          </div>
          <div class="mt-5">
            <span class="lg:font-semibold">Héo khô đầu lá</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] transition h-9 lg:mt-0 flex items-center justify-end top-1/2 -translate-y-1/2 bg-white rounded-[9px] mr-3"
              ></div>
              <span
                class="block absolute top-1/2 -translate-y-1/2 left-4 text-white"
                >0%</span
              >
            </div>
          </div>
          <div class="mt-5">
            <span class="lg:font-semibold">Thối đọt</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] transition h-9 lg:mt-0 flex items-center justify-end top-1/2 -translate-y-1/2 bg-white rounded-[9px] mr-3"
              ></div>
              <span
                class="block absolute top-1/2 -translate-y-1/2 left-4 text-white"
                >0%</span
              >
            </div>
          </div>
          <div class="mt-5">
            <span class="lg:font-semibold">Khác</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] transition h-9 lg:mt-0 flex items-center justify-end top-1/2 -translate-y-1/2 bg-white rounded-[9px] mr-3"
              ></div>
              <span
                class="block absolute top-1/2 -translate-y-1/2 left-4 text-white"
                >0%</span
              >
            </div>
          </div>
        </div>
        <div
          class="absolute hidden lg:block h-[0.5px] w-[140px] bottom-[125px] left-1/2 -translate-x-1/2 bg-white opacity-60"
        ></div>
        <button
          @click="onToggleModal()"
          :class="{
            'lg:hover:text-day': dayNightStatus === 'Day',
            'lg:hover:text-night': dayNightStatus === 'Night',
          }"
          class="lg:absolute w-full lg:mt-0 mt-8 h-[56px] rounded-[20px] font-semibold lg:bottom-14 lg:font-semibold tracking-wide [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-solid border-gray lg:shadow-none lg:bg-none lg:backdrop-opacity-0 lg:blur-none lg:text-[14px] flex items-center justify-center lg:right-[50px] lg:left-[50px] lg:h-12 lg:w-[198px] border-[0.5px] lg:rounded-[12px] lg:border-white lg:hover:bg-white cursor-pointer transition"
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
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[353px] px-7 pt-14 pb-8 lg:px-[60px] lg:py-[60px] overflow-hidden rounded-[20px] lg:rounded-[24px] bg-[#F8F8F8] text-[#1F1F1F] lg:h-[500px] lg:w-[750px]"
      >
        <img
          @click="onToggleModal()"
          src="../assets/images/close.svg"
          alt=""
          class="absolute top-6 right-6 w-7 cursor-pointer"
        />
        <div class="">
          <h2 class="text-center font-bold text-[24px]">CÁCH KHẮC PHỤC</h2>
          <div class="mt-3 lg:mt-5 overflow-y-scroll h-[335px]">
            <p class="text-justify lg:pr-4 flex flex-wrap justify-between">
              Lorem ipsum dolor sit amet consectetur. Cras venenatis imperdiet
              malesuada nunc dui enim lacus faucibus eget. Lectus suscipit erat
              ut lectus aliquam pellentesque. Est iaculis varius tempor nec ac.
              Malesuada ac enim elit vel phasellus tellus sit malesuada varius.
              Enim ultricies mollis imperdiet platea ac nibh. Suspendisse netus
              volutpat sem purus. Viverra lectus placerat interdum nunc bibendum
              eget purus purus platea. Sed sed diam vestibulum magna. Phasellus
              tempor augue sed faucibus diam cras cursus ullamcorper.Lorem ipsum
              dolor sit amet consectetur. Cras venenatis imperdiet malesuada
              nunc dui enim lacus faucibus eget. Lectus suscipit erat ut lectus
              aliquam pellentesque. Est iaculis varius tempor nec ac. Malesuada
              ac enim elit vel phasellus tellus sit malesuada varius. Enim
              ultricies mollis imperdiet platea ac nibh. Suspendisse nunc dui
              enim lacus faucibus eget. Lectus suscipit erat ut lectus aliquam
              pellentesque. Est iaculis varius tempor nec ac. Malesuada ac enim
              elit vel phasellus tellus sit malesuada varius. Enim ultricies
              mollis imperdiet platea ac nibh. Suspendis
              <img
                src="../assets/images/img-test.svg"
                alt=""
                class="my-2 w-full lg:w-[49%] lg:h-[210px]"
              />
              <img
                src="../assets/images/img-test.svg"
                alt=""
                class="my-2 w-full lg:w-[49%] lg:h-[210px]"
              />
              <iframe
                class="my-2 w-full lg:w-[605px] lg:h-[315px]"
                src="https://www.youtube.com/embed/qYX0ACKOeqQ?si=PxcxlYo_D5F0jaQk"
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
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  name: "HomeView",
  setup() {
    const app = ref(null);
    const currentTime = ref("");
    const formattedDate = ref("");
    const dayNightStatus = ref("");
    const isOpenModal = ref(false);

    const photos = reactive(["cam.svg", "cam.svg", "cam.svg", "cam.svg"]);

    function updateRealTime() {
      const time = new Date();
      const hours = time.getHours();

      if (hours >= 6 && hours < 18) {
        dayNightStatus.value = "Day";
      } else {
        dayNightStatus.value = "Night";
      }

      updateBg();

      const days = ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"];
      const dayOfWeek = days[time.getDay()];
      const date = time.getDate();
      const month = time.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
      formattedDate.value = `${dayOfWeek.slice(0, 3)}, ${date} thg ${month}`;
    }

    function updateBg() {
      const imagePath =
        dayNightStatus.value === "Day"
          ? require("@/assets/images/bg1.svg")
          : require("@/assets/images/bg2.svg");
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

    function onToggleModal() {
      isOpenModal.value = !isOpenModal.value;
    }

    onMounted(() => {
      setInterval(updateRealTime, 60000);
      updateRealTime();
    });

    return {
      app,
      currentTime,
      dayNightStatus,
      formattedDate,
      isOpenModal,
      photos,
      onToggleModal,
      updateBg,
    };
  },
};
</script>
