import { createStore } from "vuex";

export default createStore({
  state: {
    tokens: null
  },
  mutations: {
    M_LOGGED_IN_SET(state, status) {
      state.isLoggedIn = status;
    },
    M_TOKENS_SET(state, tokens) {
      state.tokens = tokens;
    },

  },
  actions: {
    async LOGGED_IN_SET(context, data) {
      if (data === false) {
        context.commit("M_TOKENS_SET", null);
      } else {
        context.commit("M_TOKENS_SET", data);
      }

    },
  },
  getters: {
    isLoggedIn(state) {
      if (state.tokens) { return true; } else { return false; }
    },
    getTokens: state => state.tokens,
  },
  modules: {},
});
