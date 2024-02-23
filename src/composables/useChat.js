import { ref } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);
const messages = ref([]);

function getMessage() {
  try {
    const dataRef = prjRef(db, "Message");
    onValue(dataRef, (snapshot) => {
      const values = snapshot.val();
      messages.value = values;
    });
  } catch (err) {
    error.value = err;
  }
}

export function useChat() {
  getMessage();
  return { error, messages };
}
