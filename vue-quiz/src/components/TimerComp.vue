<template>
  <section class="timer">
    <span
      ><b>{{ formatTime(timer) }}</b></span
    >
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits } from "vue";

const { timer: initialTimer } = defineProps(["timer"]);
const emits = defineEmits(["timerExpired"]);
const timer = ref(initialTimer);

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(intervalId);
      emits("timerExpired");
    }
  }, 1000);
});
</script>

<style lang="scss" scoped>
.timer {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  span {
    background-color: rgba(63, 185, 130, 0.5);
    padding: 15px;
    border-radius: 8px;
    border: 2px double #35495e;
  }
}
</style>
