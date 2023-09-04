<template>
  <section class="landing-page">
    <div class="vue-logo">
      <img
        src="https://masteringjs.io/assets/images/vue/vue.png"
        alt="Vue Logo"
      />
    </div>
    <h2>Ready to practice some Vue JS exercise?</h2>
    <button><b>Get Started</b></button>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.vue-logo {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  height: 300px;
  width: auto;
}

h2 {
  margin: 30px auto;
  padding: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
}

button {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 15px 30px;
  background-color: #3fb983;
  color: #35495e;
  border: none;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #35495e;
    color: #3fb983;
  }
}
</style>
