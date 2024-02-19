<template>
  <div
    id="app"
    ref="app"
    :class="{ 'bg-left': dayNightStatus === 'Night' }"
    class="h-[100vh] w-[100vw] overflow-auto bg-cover bg-right lg:bg-center text-white relative"
  >
    <date-and-time />
    <div
      class="mx-auto px-5 lg:px-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center"
    >
      <form
        @submit.prevent="onSignUp()"
        class="w-full h-auto text-center max-w-[620px] text-[12px] lg:text-[16px] px-5 lg:px-[72px] rounded-2xl [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[2px] border-solid border-white"
      >
        <h1 class="font-bold text-[36px] lg:text-[40px] mt-8 lg:mt-[60px]">
          Sign Up
        </h1>
        <label
          for="email"
          class="mt-10 px-5 lg:px-7 rounded-[44px] cursor-pointer h-[52px] lg:h-[68px] flex justify-between w-full border-[2px] border-white items-center relative"
        >
          <input
            @focus="onToggleEmail()"
            @blur="onToggleEmail()"
            v-model="email"
            type="email"
            id="email"
            class="outline-none text-[14px] lg:text-[16px] bg-transparent cursor-pointer w-[80%]"
          />
          <img
            src="../assets/images/login/email.svg"
            alt=""
            class="w-[15px] lg:w-[17px]"
          />
          <span
            v-if="!isShowEmail && !email"
            class="font-medium text-[14px] lg:text-[16px] absolute top-1/2 left-5 -translate-y-1/2"
            >Email ID</span
          >
        </label>
        <label
          for="password"
          class="mt-5 lg:mt-7 px-5 lg:px-7 rounded-[44px] cursor-pointer h-[52px] lg:h-[68px] flex justify-between w-full border-[2px] border-white items-center relative"
        >
          <input
            @focus="onTogglePassword()"
            @blur="onTogglePassword()"
            v-model="password"
            type="password"
            id="password"
            class="outline-none text-[14px] lg:text-[16px] bg-transparent cursor-pointer w-[80%]"
          />
          <img
            v-if="!password"
            src="../assets/images/login/password.svg"
            alt=""
            class="w-[14px] lg:w-[16px]"
          />
          <img
            @click="onToggleCoat()"
            v-if="password && isCoated"
            src="../assets/images/login/showpass.svg"
            alt=""
          />
          <img
            @click="onToggleCoat()"
            v-if="password && !isCoated"
            src="../assets/images/login/hidepass.svg"
            alt=""
          />
          <span
            v-if="!isShowPassword && !password"
            class="font-medium text-[14px] lg:text-[16px] absolute top-1/2 left-5 -translate-y-1/2"
            >Password</span
          >
        </label>
        <label
          for="confirmPassword"
          class="mt-5 lg:mt-7 px-5 lg:px-7 rounded-[44px] cursor-pointer h-[52px] lg:h-[68px] flex justify-between w-full border-[2px] border-white items-center relative"
        >
          <input
            @focus="onToggleConfirmPassword()"
            @blur="onToggleConfirmPassword()"
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            class="outline-none text-[14px] lg:text-[16px] bg-transparent cursor-pointer w-[80%]"
          />

          <span
            v-if="!isShowConfirmPassword && !confirmPassword"
            class="font-medium text-[14px] lg:text-[16px] absolute top-1/2 left-5 -translate-y-1/2"
            >Confirm password
          </span>
        </label>
        <button
          @submit="onSignUp()"
          class="w-[200px] lg:text-[20px] lg:w-full mt-7 font-bold text-[16px] hover:bg-slate-100 rounded-[50px] bg-white text-black h-[50px] lg:h-[68px]"
        >
          <span v-if="!isPending">Sign Up</span>
          <span v-if="isPending">Sign Up...</span>
        </button>
        <div class="mt-5 mb-9">
          <span class="font-normal"
            >I really have an account.
            <span class="font-bold"
              ><router-link :to="{ name: 'SignIn', params: {} }"
                >Sign in</router-link
              ></span
            ></span
          >
        </div>
      </form>
    </div>
    <copy-right class="opacity-40 lg:hidden" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
import DateAndTime from "@/components/DateAndTime.vue";
import CopyRight from "@/components/CopyRight.vue";
export default {
  components: {
    DateAndTime,
    CopyRight,
  },
  setup() {
    const app = ref(null);
    const dayNightStatus = ref("");
    const isChecked = ref(false);
    const isShowEmail = ref(false);
    const isShowPassword = ref(false);
    const isShowConfirmPassword = ref(false);
    const isCoated = ref(false);
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const confirmPassword = ref(null);
    const { error, isPending, signup } = useSignUp();

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

    function onToggleCheck() {
      isChecked.value = !isChecked.value;
    }

    function onToggleCoat() {
      isCoated.value = !isCoated.value;
      const passwordInput = document.querySelector("#password");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }

    function onToggleEmail() {
      isShowEmail.value = !isShowEmail.value;
    }

    function onTogglePassword() {
      isShowPassword.value = !isShowPassword.value;
    }

    function onToggleConfirmPassword() {
      isShowConfirmPassword.value = !isShowConfirmPassword.value;
    }

    const onSignUp = async () => {
      if (confirmPassword.value === password.value) {
        await signup(email.value, password.value);
        if (!error.value) router.push({ name: "HomeView", params: {} });
        else alert(error.value);
      } else {
        alert("Wrong confirm password!");
      }
    };

    function updateBg() {
      const imagePath =
        dayNightStatus.value === "Day"
          ? require("@/assets/images/login/bg1.svg")
          : require("@/assets/images/login/bg2.svg");
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

    onMounted(() => {
      updateRealTime();
      setInterval(updateRealTime, 60000);
    });

    return {
      app,
      confirmPassword,
      dayNightStatus,
      email,
      isChecked,
      isCoated,
      isShowEmail,
      isShowPassword,
      isShowConfirmPassword,
      isPending,
      password,
      onToggleCheck,
      onToggleCoat,
      onToggleEmail,
      onTogglePassword,
      onToggleConfirmPassword,
      onSignUp,
      updateBg,
    };
  },
};
</script>
