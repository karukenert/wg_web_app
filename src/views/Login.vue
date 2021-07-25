<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input
        type="text"
        class="form-control"
        id="username"
        v-model="username"
        required
        placeholder="Username"
      />
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
        required
        placeholder="Password"
      />

      <button type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import * as Constants from "../constants.js";

export default {
  name: "login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    ...mapActions(["LOGGED_IN_SET"]),
    async login() {
      const response = await axios.post(`${Constants.BASE_URL}/user/login`, {
        username: this.username,
        password: this.password,
      });

      if (response.status === 200) {
        await this.LOGGED_IN_SET({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        });
        this.$router.push("/");
      } else {
        // TODO Error modal
        alert(`We have an error: ${response.data}`);
      }
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scoped>
</style>