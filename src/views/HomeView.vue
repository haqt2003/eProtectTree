<template>
  <div
    id="app"
    class="h-[100vh] w-[100vw] overflow-auto bg-cover lg:bg-cennter text-white"
  >
    <div class="lg:hidden mx-auto mt-10 text-center">
      <span class="font-semibold">eProtectTree</span>
      <span class="block mt-1">Th 6, 28 thg 1</span>
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
          <div class="flex justify-between items-center">
            <div class="flex items-center lg:block">
              <img
                src="../assets/images/flower.svg"
                alt=""
                class="w-[20px] lg:w-[75px]"
              />
              <span class="font-semibold text-[14px] ml-3 block lg:hidden"
                >Hoa hồng</span
              >
            </div>
            <div class="">
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
                class="absolute lg:h-[35px] h-9 lg:mt-0 w-[70%] flex items-center justify-end px-4 top-1/2 -translate-y-1/2 bg-white text-[#B4B48D] rounded-[9px] mr-3"
              >
                35%
              </div>
            </div>
          </div>
          <div class="mt-5">
            <span class="lg:font-semibold">Thán thư</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] h-9 lg:mt-0 w-[70%] flex items-center justify-end px-4 top-1/2 -translate-y-1/2 bg-white text-[#B4B48D] rounded-[9px] mr-3"
              >
                35%
              </div>
            </div>
          </div>
          <div class="mt-5">
            <span class="lg:font-semibold">Héo khô đầu lá</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] h-9 lg:mt-0 w-[70%] flex items-center justify-end px-4 top-1/2 -translate-y-1/2 bg-white text-[#B4B48D] rounded-[9px] mr-3"
              >
                35%
              </div>
            </div>
          </div>
          <div class="mt-5">
            <span class="lg:font-semibold">Thối đọt</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] h-9 lg:mt-0 w-[70%] flex items-center justify-end px-4 top-1/2 -translate-y-1/2 bg-white text-[#B4B48D] rounded-[9px] mr-3"
              >
                35%
              </div>
            </div>
          </div>
          <div class="mt-5">
            <span class="lg:font-semibold">Khác</span>
            <div
              class="w-full relative h-9 mt-2 border-[2px] border-white lg:mt-[6px] rounded-[10px]"
            >
              <div
                class="absolute lg:h-[35px] h-9 lg:mt-0 w-[70%] flex items-center justify-end px-4 top-1/2 -translate-y-1/2 bg-white text-[#B4B48D] rounded-[9px] mr-3"
              >
                35%
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute hidden lg:block h-[0.5px] w-[140px] bottom-[125px] left-1/2 -translate-x-1/2 bg-white opacity-60"
        ></div>
        <button
          class="lg:absolute w-full lg:mt-0 mt-8 h-[56px] rounded-[20px] font-semibold lg:bottom-14 lg:font-semibold tracking-wide [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-solid border-gray lg:shadow-none lg:bg-none lg:backdrop-opacity-0 lg:blur-none lg:text-[14px] flex items-center justify-center lg:right-[50px] lg:left-[50px] lg:h-12 lg:w-[198px] border-[0.5px] lg:rounded-[12px] lg:border-white lg:hover:bg-white lg:hover:text-[#818451] cursor-pointer transition"
        >
          XEM CÁCH KHẮC PHỤC
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped lang="css">
#app {
  background-image: url("../assets/images/bg1.svg");
}
</style>
