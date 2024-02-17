import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const error = ref(null);

async function resetPassword(email) {
  try {
    const response = await sendPasswordResetEmail(auth, email);
    return response;
  } catch (err) {
    error.value = err.message;
  }
}

export function useResetPassword() {
  return { error, resetPassword };
}
