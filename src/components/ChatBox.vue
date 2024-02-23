<template>
  <div
    class="w-full h-[100vh] z-10 text-black [background:linear-gradient(0deg,_#ECFBF0,_rgba(255,255,255,_100),_rgba(255,255,255,_100))] absolute top-0 left-0 lg:top-[30%] lg:left-[76%] lg:w-[320px] lg:h-[470px] lg:text-[14px]"
  >
    <div
      class="h-[64px] lg:h-[56px] absolute top-0 left-0 w-full z-10 drop-shadow-md bg-white px-5 lg:px-4 flex justify-between items-center"
    >
      <img
        src="../assets/images/chat/back.svg"
        alt=""
        class="lg:hidden"
        @click="onToggleChat()"
      />
      <span class="font-semibold max-w-[70%] truncate lg:hidden"
        >Viện nghiên cứu nông sản PTIT
      </span>
      <img src="../assets/images/chat/user.svg" alt="" class="lg:hidden" />
      <div class="items-center w-[92%] hidden lg:flex">
        <img src="../assets/images/chat/user.svg" alt="" />
        <span class="ml-4 font-semibold max-w-[70%] truncate"
          >Viện nghiên cứu nông sản PTIT</span
        >
      </div>
      <img
        @click="onToggleChat()"
        src="../assets/images/chat/close.svg"
        alt=""
        class="hidden lg:block w-[30px] cursor-pointer"
      />
    </div>
    <section
      ref="sectionRef"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] h-[80%] lg:h-[73%] w-full px-5 lg:px-4 overflow-y-scroll"
    >
      <h1 v-if="!messages" class="text-center mt-10 text-[#ADADAD]">
        No messages
      </h1>
      <ul>
        <li
          v-for="msg in messages"
          :key="msg"
          :class="[
            'mt-6',
            'flex',
            'items-start',
            'w-[85%]',
            msg.username === currentUser ? 'float-right' : 'float-left',
            msg.username === currentUser ? 'justify-end' : 'justify-start',
          ]"
        >
          <img
            src="../assets/images/chat/user.svg"
            alt=""
            :class="[
              msg.username === currentUser ? 'hidden' : '',
              'lg:w-[36px]',
            ]"
          />
          <div class="ml-3">
            <span
              :class="[
                msg.username === currentUser ? 'hidden' : 'block',
                'mb-2',
                'text-[#2E9668]',
                'truncate',
                'max-w-[260px]',
              ]"
              >{{ msg.username }}</span
            >
            <p
              :class="[
                'max-w-[200px]',
                'w-fit',
                'h-auto',
                'px-5',
                'py-[10px]',
                'rounded-[20px]',
                'break-words',
                msg.username === currentUser ? 'bg-[#57CC98]' : 'bg-[#F0F0F0]',
                msg.username === currentUser ? 'text-white' : 'text-black',
                msg.username === currentUser ? 'ml-auto' : 'mr-auto',
              ]"
            >
              {{ msg.message }}
            </p>
          </div>
        </li>
      </ul>
    </section>
    <form
      @submit.prevent="onSendMessage"
      class="absolute px-5 lg:px-4 bottom-4 w-full flex justify-between items-center"
    >
      <img
        src="../assets/images/chat/add.svg"
        alt=""
        class="lg:w-[28px] cursor-pointer"
      />
      <input
        v-model="message"
        type="text"
        class="h-[46px] lg:h-[40px] px-6 w-[260px] lg:w-[200px] rounded-[50px] outline-none"
        placeholder="Aa"
      />
      <img
        @click="onSendMessage"
        src="../assets/images/chat/send.svg"
        alt=""
        class="cursor-pointer lg:w-[28px]"
      />
    </form>
  </div>
</template>

<script>
import { ref, onMounted, inject, watch } from "vue";
import { useMessage } from "@/composables/useMessage";
import { useChat } from "@/composables/useChat";
export default {
  setup() {
    const currentUser = localStorage.getItem("email");
    const onToggleChat = inject("onToggleChat");
    const message = ref("");
    const { messages } = useChat();
    const { sendMessage } = useMessage();
    const sectionRef = ref(null);

    function onSendMessage() {
      if (message.value) {
        sendMessage(currentUser, message.value);
        message.value = "";
      }
    }

    function scrollToBottom() {
      const element = document.querySelector("section");
      const distanceToScroll = element.scrollHeight - element.scrollTop;
      const duration = 500;

      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) {
          startTime = currentTime;
        }
        const timeElapsed = currentTime - startTime;
        const scrollProgress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutQuad(scrollProgress);
        element.scrollTop =
          element.scrollTop + distanceToScroll * easedProgress;

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      requestAnimationFrame(animation);
    }

    watch(messages, () => {
      scrollToBottom();
    });

    onMounted(() => {
      scrollToBottom();
    });

    return {
      currentUser,
      message,
      messages,
      sectionRef,
      onToggleChat,
      onSendMessage,
      scrollToBottom,
    };
  },
};
</script>
