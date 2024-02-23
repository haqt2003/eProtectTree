import { ref } from "vue";
import { db, ref as prjRef, push } from "@/configs/firebase";

const error = ref(null);

function sendMessage(username, message) {
  try {
    const messagesRef = prjRef(db, "Message");
    push(messagesRef, {
      username: username,
      message: message,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    error.value = error;
    console.log(error);
  }
}

export function useMessage() {
  return { error, sendMessage };
}
