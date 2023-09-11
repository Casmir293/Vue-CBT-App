<template>
  <section class="content">
    <!-- Header -->
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        alt="Vue JS Logo"
      />
      <h2>Vue JS CBT App</h2>
    </header>

    <!-- Main -->
    <main>
      <section v-if="questionFrame" class="question-frame">
        <!-- Timer -->
        <section>
          <timer-comp :timer="600" @timerExpired="endTest" />
        </section>

        <!-- Questions -->
        <section class="question" v-if="currentQuestion">
          <p class="question-number">
            <b>Question {{ currentQuestionIndex + 1 }} of 20</b>
          </p>
          <p>{{ currentQuestion.questionText }}</p>
          <form>
            <div
              v-for="(option, index) in currentQuestion.options"
              :key="index"
            >
              <input
                type="radio"
                :id="'quest-' + currentQuestion.id + '-' + option.id"
                :name="'quest-' + currentQuestion.id"
                :value="option.text"
                :checked="selectedOptions[currentQuestionIndex] === option.text"
                @change="selectOption(option.text)"
              />
              <label :for="'quest-' + currentQuestion.id + '-' + option.id">
                &nbsp; {{ option.text }}</label
              >
              <br />
            </div>
          </form>
        </section>

        <!-- Next & Submit -->
        <section>
          <div v-if="currentQuestion" v-show="nextButton" class="next-btn">
            <button @click="nextQuestion"><b>Next</b></button>
          </div>
          <br />
          <div @click="endTest" v-show="endTestBtn" class="end-test-btn">
            <button><b>End Test</b></button>
          </div>
        </section>
      </section>
      <section v-else>
        <result-comp
          :correctScore="correctScore"
          :wrongAnswer="wrongAnswer"
          :unAnswered="unAnswered"
        />
      </section>
    </main>

    <!-- Footer -->
    <footer>
      Developed by
      <a href="https://casmir.dev" target="_blank"> &nbsp;casmir.dev</a>
    </footer>
  </section>
</template>

<script setup>
import { useQuestionsStore } from "../stores/questions";
import { ref, computed, onMounted, watch } from "vue";
import ResultComp from "../components/ResultComp.vue";
import TimerComp from "../components/TimerComp.vue";

const questionStore = useQuestionsStore();
const currentQuestionIndex = ref(0);
const isLoading = ref(false);
const nextButton = ref(true);
const endTestBtn = ref(false);
const selectedOptions = ref([]);
const shuffledQuestions = ref([]);
const questionFrame = ref(true);
const correctScore = ref(0);
const wrongAnswer = ref(0);
const unAnswered = ref(0);

const shuffleQuestions = () => {
  shuffledQuestions.value = [...questionStore.questions].sort(
    () => Math.random() - 0.5
  );
};

watch(questionStore.questions, () => {
  shuffleQuestions();
});

const checkCorrectAnswer = () => {
  const selectedOption = selectedOptions.value[currentQuestionIndex.value];
  const correctOption = shuffledQuestions.value[
    currentQuestionIndex.value
  ].options.find((option) => option.isCorrect);

  if (selectedOption === correctOption.text) {
    correctScore.value++;
  } else if (selectedOption !== correctOption.text && selectedOption !== null) {
    wrongAnswer.value++;
  }
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < shuffledQuestions.value.length - 1) {
    checkCorrectAnswer();
    currentQuestionIndex.value++;
  }

  if (currentQuestionIndex.value === shuffledQuestions.value.length - 1) {
    nextButton.value = false;
    endTestBtn.value = true;
  }
  selectedOptions.value[currentQuestionIndex.value] = null;
};

const endTest = () => {
  questionFrame.value = false;
  checkCorrectAnswer();
  unAnswered.value = 20 - (correctScore.value + wrongAnswer.value);
};

const selectOption = (option) => {
  selectedOptions.value[currentQuestionIndex.value] = option;
};

const currentQuestion = computed(() => {
  return shuffledQuestions.value[currentQuestionIndex.value];
});

onMounted(async () => {
  isLoading.value = true;

  try {
    await questionStore.fetchQuestions();
    shuffleQuestions();
    selectedOptions.value = Array(shuffledQuestions.value.length).fill(null);
  } catch (error) {
    console.error("Error fetching questions:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped>
// Page Align
.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
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
  border-bottom: 1px dotted #35495e;
  background-color: rgba(63, 185, 130, 0.5);
}

h2 {
  color: #35495e;
  letter-spacing: 3px;
  text-shadow: 3px 0px 7px rgba(63, 185, 130), -3px 0px 7px rgba(63, 185, 130),
    0px 4px 7px rgba(63, 185, 130);
}

// Main

main {
  padding: 0px 15px;
  line-height: 1.5;
  background-color: hsla(211, 28%, 29%, 0.1);
}

.question-number {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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

.end-test-btn {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px 30px 0px;
  button {
    padding: 15px;
    background-color: rgba(53, 73, 94, 0.5);
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
  }
}

// Footer
footer {
  background-color: rgba(63, 185, 130, 0.5);
  padding: 20px 5px;
  display: flex;
  justify-content: center;
}

// Media Query for Ipads
@media (min-width: 576px) {
  header {
    justify-content: normal;
  }

  img {
    margin-right: 25px;
  }

  .question-frame {
    border: 1px solid black;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 30px;
    font-size: 1.5rem;
  }

  button {
    font-size: 1.5rem;
  }
}
</style>
