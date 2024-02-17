import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!response) throw new Error("Co loi");
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
