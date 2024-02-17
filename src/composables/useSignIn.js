import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (!response) throw new Error("Sai thông tin đăng nhập");
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
