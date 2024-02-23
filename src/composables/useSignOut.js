import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { signOut } from "firebase/auth";

const error = ref(null);

async function signout() {
  try {
    const response = await signOut(auth);
    return response;
  } catch (err) {
    error.value = err;
  }
}

export function useSignOut() {
  return { error, signout };
}
