<template>
  <section class="landing-image">
    <div class="landing-text">
      <h2>Take a Vue JS Test</h2>
      <button><b>Get Started</b></button>
    </div>
  </section>
</template>

<script setup></script>

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
  text-shadow: 3px 0px 7px rgba(81, 67, 21, 0.8),
    -3px 0px 7px rgba(81, 67, 21, 0.8), 0px 4px 7px rgba(81, 67, 21, 0.8);
}

button {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 15px 30px;
  background-color: #3fb983;
  color: #35495e;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #35495e;
    color: #3fb983;
  }
}

// Media Query for Ipads
@media (min-width: 576px) {
  button {
    font-size: 2rem;
  }
}
</style>
