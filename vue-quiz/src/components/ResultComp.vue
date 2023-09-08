<template>
  <section>
    <p>
      <b>Correct- <span class="correct">15</span></b>
    </p>
    <p>
      <b>Wrong- <span class="wrong">3</span></b>
    </p>
    <p><b>Unanswered- 2</b></p>
    <p><b>Used Time- 10m : 20s</b></p>

    <h1>75%</h1>

    <div class="next-btn">
      <button @click="nextQuestion"><b>Review</b></button>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  min-width: 280px;
  border: 1px solid black;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  line-height: 2;
  .correct {
    color: rgba(63, 185, 130);
  }
  .wrong {
    color: red;
  }
}
.next-btn {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  button {
    padding: 10px 16px;
    background-color: rgba(63, 185, 130, 0.5);
    cursor: pointer;
    border-radius: 10px;
  }
}

h1 {
  display: flex;
  justify-content: center;
  font-size: 5rem;
}

// Media Query for Ipads
@media (min-width: 576px) {
  section {
    font-size: 1.5rem;
    padding: 40px 80px;
    button {
      font-size: 1.5rem;
    }
  }
}
</style>
