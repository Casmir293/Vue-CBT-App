import { defineStore } from "pinia";

export const useQuestionsStore = defineStore({
  id: "questions",

  state: () => ({
    questions: [],
    loading: false,
    error: null,
  }),

  getters: {
    currentQuestion: (state) => {
      return state.questions[0];
    },
  },

  actions: {
    async fetchQuestions() {
      this.loading = true;
      try {
        const response = await fetch(
          "https://casmir293.github.io/cbtdatabase/db.json"
        );
        const data = await response.json();
        this.questions = data.questions;
      } catch (error) {
        console.error("Error fetching questions:", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
