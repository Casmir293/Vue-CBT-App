import { defineStore } from "pinia";

export const useQuestionsStore = defineStore({
  id: "questions",

  state: () => ({
    questions: [],
    question: null,
    loading: false,
    error: null,
  }),
});
