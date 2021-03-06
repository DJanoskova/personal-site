import { createStore } from "vuex";

import axios from "../axios";

export default createStore({
  state: {
    projects: null
  },
  mutations: {
    PROJECTS_SET(state, projects) {
      state.projects = projects;
    }
  },
  actions: {
    async PROJECTS_FETCH({ commit }) {
      const result = await axios.get(
        "https://api.github.com/users/DJanoskova/repos?per_page=100"
      );
      // display only the ones that aren't forked
      const filteredRepos = result
        .filter(r => !r.fork)
        .sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });
      commit("PROJECTS_SET", filteredRepos);
    }
  },
  getters: {
    projects: state => state.projects
  },
  modules: {}
});
