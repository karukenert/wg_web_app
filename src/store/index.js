import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false
  },
  mutations: {
    LOGGED_IN_SET(state, status) {
      state.isLoggedIn = status;
    },
  },
  actions: {
    async LOGGED_IN_SET_STATUS(context, data) {
      context.commit("LOGGED_IN_SET", data);
    },

  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  modules: {},
});
