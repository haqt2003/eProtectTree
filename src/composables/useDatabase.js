import { ref } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);
const logData = ref([]);

function readDatabase(path) {
  try {
    const dataRef = prjRef(db, path);
    onValue(dataRef, (snapshot) => {
      const values = snapshot.val();
      if (values) {
        const dataArray = Object.values(values);
        const slicedData = dataArray.slice(-20);
        logData.value = slicedData;
      }
    });
  } catch (err) {
    error.value = err;
  }
}

export function useDatabase(path) {
  readDatabase(path);
  return { error, logData };
}
