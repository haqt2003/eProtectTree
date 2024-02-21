import { ref } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);
const detailsData = ref(null);

function readDatabase() {
  try {
    const dataRef = prjRef(db, "Describe/Rose");
    onValue(dataRef, (snapshot) => {
      const values = snapshot.val();
      detailsData.value = values;
    });
  } catch (err) {
    error.value = err;
  }
}

export function useDetails() {
  readDatabase();
  return { error, detailsData };
}
