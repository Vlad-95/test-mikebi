import { defineStore } from 'pinia';
import axios from 'axios';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    apiUrl: 'http://localhost:5173/db.json',
  }),

  actions: {
    async getData() {
      return axios.get(this.apiUrl);
    },
  },
});
