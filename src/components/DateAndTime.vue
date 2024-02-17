<template>
  <div class="lg:hidden mx-auto mt-10 text-center">
    <span class="font-semibold">eProtectTree</span>
    <span class="block mt-1">{{ formattedDate }}</span>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const formattedDate = ref("");

    function updateRealTime() {
      const time = new Date();
      const days = ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"];
      const dayOfWeek = days[time.getDay()];
      const date = time.getDate();
      const month = time.getMonth() + 1;
      formattedDate.value = `${dayOfWeek.slice(0, 4)}, ${date} thg ${month}`;
    }

    onMounted(() => {
      updateRealTime();
      setInterval(updateRealTime, 60000);
    });

    return { formattedDate };
  },
};
</script>
