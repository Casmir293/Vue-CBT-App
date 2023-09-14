<template>
  <aside class="review">
    <h2><span>Review</span></h2>

    <!-- Display the Shuffled Questions -->
    <ol class="questions">
      <li
        v-for="question in shuffledQuestions.shuffledQuestions"
        :key="question.id"
        class="question-list"
      >
        {{ question.questionText }}
        <ol class="option-list">
          <li v-for="option in question.options" :key="option.id">
            <!-- <input
              type="radio"
              :id="option.id"
              :value="option.id"
              name="options"
            /> -->
            <label
              :for="option.id"
              :style="option.isCorrect ? { backgroundColor: '#3fb98280' } : {}"
              >{{ option.text }}</label
            >
          </li>
        </ol>
      </li>
    </ol>

    <router-link to="/"><b>Return Home</b></router-link>
  </aside>
</template>

<script setup>
import { defineProps } from "vue";

const shuffledQuestions = defineProps({
  shuffledQuestions: Array,
});
</script>

<style lang="scss" scoped>
h2 {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  span {
    background-color: #3fb98280;
    padding: 15px;
    border-radius: 8px;
    border: 2px double #35495e;
  }
}

.review {
  margin: 5px 12px;
}

.option-list {
  list-style-type: upper-alpha;
  margin-left: 15px;
}

.questions {
  margin-bottom: 15px;
  li {
    margin-bottom: 5px;
  }
  .question-list {
    margin-bottom: 20px;
  }
}

a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
