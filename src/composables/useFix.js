import { ref } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);

function readFix(path) {
  return new Promise((resolve, reject) => {
    try {
      const dataRef = prjRef(db, path);
      onValue(dataRef, (snapshot) => {
        const response = snapshot.val();
        resolve(response);
      });
    } catch (err) {
      error.value = err;
      reject(err);
    }
  });
}

export function useFix() {
  return { error, readFix };
}
