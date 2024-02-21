import { ref, watchEffect } from "vue";
import { db, ref as prjRef, onValue } from "@/configs/firebase";

const error = ref(null);
const datafix = ref(null);

function readFirebase() {
  try {
    const dataRef = prjRef(db, "Fix/Hoa hong/Phan trang");
    onValue(dataRef, (snapshot) => {
      datafix.value = snapshot.val();
    });
  } catch (err) {
    error.value = err;
  }
}

export function useFirebase() {
  readFirebase();

  watchEffect(() => {
    console.log(datafix.value); // Thực hiện cập nhật giao diện người dùng tại đây
  });

  return { error, datafix };
}
