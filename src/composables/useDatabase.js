import { ref, watchEffect } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);
const logData = ref(null);

function readDatabase() {
  try {
    const dataRef = prjRef(db, "Sensor/carbondioxitLevel");
    onValue(dataRef, (snapshot) => {
      logData.value = snapshot.val();
    });
  } catch (err) {
    error.value = err;
  }
}

export function useDatabase() {
  readDatabase();

  watchEffect(() => {
    console.log(logData.value); // Thực hiện cập nhật giao diện người dùng tại đây
  });

  return { error, logData };
}