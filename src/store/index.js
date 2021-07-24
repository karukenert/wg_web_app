import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
    accessToken: "",
    refreshToken: ""
  },
  mutations: {
    M_LOGGED_IN_SET(state, status) {
      state.isLoggedIn = status;
    },
    M_ACCESS_TOKEN_SET(state, token) {
      state.accessToken = token;
    },
    M_REFRESH_TOKEN_SET(state, token) {
      state.refreshToken = token;
    },
  },
  actions: {
    async LOGGED_IN_SET(context, data) {
      if (data === false) {
        context.commit("M_LOGGED_IN_SET", false);
        context.commit("M_ACCESS_TOKEN_SET", "");
        context.commit("M_REFRESH_TOKEN_SET", "");
      } else {
        context.commit("M_LOGGED_IN_SET", true);
        context.commit("M_ACCESS_TOKEN_SET", data.accessToken);
        context.commit("M_REFRESH_TOKEN_SET", data.refreshToken);
      }

    },
  },
  getters: {
    isLoggedIn(state) { return state.isLoggedIn; },
    getAccessToken(state) { return state.accessToken; },
    getRefreshToken(state) { return state.refreshToken; }
  },
  modules: {},
});
