import { ref } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);
const fixData = ref(null);

function readDatabase(path) {
  try {
    const dataRef = prjRef(db, path);
    onValue(dataRef, (snapshot) => {
      fixData.value = snapshot.val();
    });
  } catch (err) {
    error.value = err;
  }
}

export function useFix(path) {
  readDatabase(path);
  return { error, fixData };
}
