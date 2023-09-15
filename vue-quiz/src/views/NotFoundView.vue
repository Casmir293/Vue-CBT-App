<template>
  <div class="image">
    <div class="text">
      <h2>404 Not Found</h2>
      <router-link to="/">Return Home</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.image {
  background-image: url("/images/background.jpeg");
  background-color: #cccccc;
  height: 100vh;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.text {
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

a {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: blue;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 1s;
  &:hover {
    color: #fff;
  }
}
</style>
