import { ref, watchEffect } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);
const des = ref(null);

function readDescribe() {
  try {
    const dataRef = prjRef(db, "Describe/Rose");
    onValue(dataRef, (snapshot) => {
      des.value = snapshot.val();
    });
  } catch (err) {
    error.value = err;
  }
}

export function useDescribe() {
  readDescribe();

  watchEffect(() => {
    console.log(des.value); // Thực hiện cập nhật giao diện người dùng tại đây
  });

  return { error, des };
}
