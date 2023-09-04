<template>
  <section>
    <router-view></router-view>
    <theme-comp></theme-comp>
  </section>
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
