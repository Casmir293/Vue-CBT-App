<template>
  <!-- Landing Page -->
  <section v-if="landingPage" class="landing-image">
    <div class="landing-text">
      <h2>Take a Vue JS Test</h2>
      <button @click="toggleLandingPage"><b>Get Started</b></button>
    </div>
  </section>

  <!-- Start Now -->
  <section v-else class="landing-image">
    <div class="landing-text">
      <h2>
        Questions: 20 <br />
        <br />
        Time: 10 mins
      </h2>
      <br />

      <button>
        <router-link to="/exercise"><b>Start Now</b></router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      landingPage: true,
    };
  },

  methods: {
    toggleLandingPage() {
      this.landingPage = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.landing-image {
  background-image: url("/images/background.jpeg");
  background-color: #cccccc;
  height: 100vh;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.landing-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h2 {
  margin: 30px auto;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 300px;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 5px;
  line-height: 1.5;
  text-shadow: 3px 0px 7px rgba(81, 67, 21, 0.8),
    -3px 0px 7px rgba(81, 67, 21, 0.8), 0px 4px 7px rgba(81, 67, 21, 0.8);
}

button {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 15px 30px;
  background-color: #3fb983;
  border: none;
  color: #35495e;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #35495e;
    color: #3fb983;
  }
  a {
    text-decoration: none;
    color: #35495e;
  }
}

button a:hover {
  color: #3fb983;
  transition: 1s;
}

// Media Query for Ipads
@media (min-width: 576px) {
  button {
    font-size: 2rem;
  }
}
</style>
