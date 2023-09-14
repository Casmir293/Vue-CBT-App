<template>
  <aside>
    <h2><span>Review</span></h2>
    <!-- Display the shuffled questions here -->
    <div v-for="(questionItem, index) in shuffledQuestions" :key="index">
      <p>
        <b>Question {{ index + 1 }}:</b>
        {{ questionItem.questionText }}
      </p>
      <ul>
        <li
          v-for="(option, optionIndex) in questionItem.options"
          :key="optionIndex"
        >
          <input
            type="radio"
            :id="'review-' + questionItem.id + '-' + option.id"
            :name="'review-' + questionItem.id"
            :value="option.text"
            :checked="selectedOptions[index] === option.text"
          />
          <label :for="'review-' + questionItem.id + '-' + option.id">
            &nbsp; {{ option.text }}
          </label>
        </li>
      </ul>
    </div>
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
    background-color: rgba(63, 185, 130, 0.5);
    padding: 15px;
    border-radius: 8px;
    border: 2px double #35495e;
  }
}
</style>
