import { ref } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    try {
      const dataRef = prjRef(db, path);
      onValue(dataRef, (snapshot) => {
        const response = snapshot.val();
        const keys = Object.keys(response);
        const lastKey = keys[keys.length - 1];
        const lastValue = response[lastKey];
        resolve(lastValue);
      });
    } catch (err) {
      error.value = err;
      reject(err);
    }
  });
}

export function useSensor() {
  return { error, readDatabase };
}
