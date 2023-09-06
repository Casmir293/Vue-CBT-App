<template>
  <main>
    <router-view></router-view>
    <theme-comp></theme-comp>
  </main>
</template>

<script>
import ThemeComp from "./components/ThemeComp.vue";

export default {
  name: "App",
  components: {
    "theme-comp": ThemeComp,
  },
};
</script>
