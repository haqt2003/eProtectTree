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
        @submit.prevent="onSignIn()"
        class="w-full h-auto text-center max-w-[620px] text-[12px] lg:text-[16px] px-5 lg:px-[72px] rounded-2xl [background:linear-gradient(168.26deg,_rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.15))] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] border-[2px] border-solid border-white"
      >
        <h1 class="font-bold text-[36px] lg:text-[40px] mt-8 lg:mt-[60px]">
          Sign In
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
        <div class="mt-4 lg:mt-6 flex justify-between items-center font-normal">
          <div
            @click="onToggleCheck()"
            class="flex items-center cursor-pointer"
          >
            <img
              v-if="!isRemember"
              src="../assets/images/login/uncheck.svg"
              alt=""
            />
            <img
              v-if="isRemember"
              src="../assets/images/login/checked.svg"
              alt=""
            />
            <span class="ml-2">Remember me</span>
          </div>
          <div @click="onResetPassword()" class="cursor-pointer">
            <span id="forgotPassword">Forgot Password?</span>
          </div>
        </div>
        <button
          @submit="onSignIn()"
          class="w-[200px] lg:text-[20px] lg:w-full mt-7 font-bold text-[16px] hover:bg-slate-100 rounded-[50px] bg-white text-black h-[50px] lg:h-[68px]"
        >
          <span v-if="!isPending">Sign In</span>
          <span v-if="isPending">Sign In...</span>
        </button>
        <div class="mt-5 mb-9">
          <span class="font-normal"
            >Don't have an account?
            <span class="font-bold"
              ><router-link :to="{ name: 'SignUp', params: {} }"
                >Sign up</router-link
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
import { useSignIn } from "@/composables/useSignIn";
import { useResetPassword } from "@/composables/useResetPassword";
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
    const isShowEmail = ref(false);
    const isShowPassword = ref(false);
    const isRemember = ref(true);
    const isCoated = ref(false);
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const { error, isPending, signin } = useSignIn();
    const { resetPassword } = useResetPassword();

    function initView() {
      if (localStorage.getItem("email") && localStorage.getItem("password")) {
        email.value = localStorage.getItem("email");
        password.value = localStorage.getItem("password");
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

    function onToggleCheck() {
      isRemember.value = !isRemember.value;
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

    const onResetPassword = async () => {
      if (email.value) {
        await resetPassword(email.value);
        document.getElementById("forgotPassword").innerHTML =
          "Check your email!";
      } else {
        alert("Missing email!");
      }
    };

    const onSignIn = async () => {
      await signin(email.value, password.value);
      if (!error.value) {
        localStorage.clear();
        if (isRemember.value === true) {
          localStorage.setItem("email", email.value);
          localStorage.setItem("password", password.value);
        }
        localStorage.setItem("loggedIn", "true");
        router.push({ name: "HomeView", params: {} });
      } else alert(error.value);
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
      initView();
      setInterval(updateRealTime, 60000);
    });

    return {
      app,
      dayNightStatus,
      email,
      isCoated,
      isShowEmail,
      isShowPassword,
      isRemember,
      isPending,
      password,
      onToggleCheck,
      onToggleCoat,
      onToggleEmail,
      onTogglePassword,
      onSignIn,
      onResetPassword,
      updateBg,
    };
  },
};
</script>

<style lang="css" scoped>
input[type="checkbox"] {
  background-color: white;
  outline: none;
}

input[type="checkbox"]:checked {
  background-color: #ffffff; /* Màu sắc khi được chọn */
}
</style>
