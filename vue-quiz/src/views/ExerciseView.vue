<template>
  <header>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
      alt="Vue JS Logo"
    />
    <h2>Vue JS Quiz App</h2>
  </header>
  <main>
    <!-- Timer -->
    <section class="timer">10:00</section>

    <!-- Questions -->
    <section>
      <p>1. How many geographical zone does Nigeria have?</p>
      <form>
        <input type="radio" id="quest-1-a" name="quest-1" value="Three" />
        <label for="quest-1-a">A. Three</label>
        <br />
        <input type="radio" id="quest-1-b" name="quest-1" value="Four" />
        <label for="quest-1-b">B. Four</label>
        <br />
        <input type="radio" id="quest-1-c" name="quest-1" value="Five" />
        <label for="quest-1-c">C. Five</label>
        <br />
        <input type="radio" id="quest-1-d" name="quest-1" value="Six" />
        <label for="quest-1-d">D. Six</label>
        <br />
      </form>
    </section>

    <!-- Next or Submit -->
    <section>
      <button>Next</button> <br />
      <button>Submit</button>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    Developed by <a href="https://casmir.dev" target="_blank">casmir.dev</a>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
// Header
img {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-bottom: 1px dotted black;
  background-color: rgba(63, 185, 130, 0.5);
}

h2 {
  color: #35495e;
  letter-spacing: 3px;
  text-shadow: 3px 0px 7px rgba(63, 185, 130), -3px 0px 7px rgba(63, 185, 130),
    0px 4px 7px rgba(63, 185, 130);
}

// Main

// Media Query for Ipads
@media (min-width: 576px) {
  header {
    justify-content: normal;
  }
  img {
    margin-right: 25px;
  }
}
</style>
