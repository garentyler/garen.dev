import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTheme: 'dark',
  },
  mutations: {
    setTheme(state, themeName) {
      const body = document.getElementById('body');
      if (body) {
        body.classList.remove(`${state.currentTheme}-theme`);
        state.currentTheme = themeName;
        body.classList.add(`${state.currentTheme}-theme`);
      }
    },
  },
  actions: {},
  modules: {},
});
