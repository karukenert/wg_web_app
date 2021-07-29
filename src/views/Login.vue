<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="logUserIn">
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
import { mapActions, mapGetters } from "vuex";
const userService = require("@/services/userService");

export default {
  name: "login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    ...mapActions(["LOGGED_IN_SET"]),
    async logUserIn() {
      // TODO implement loading.
      let logInStatus = await userService.logIn(this.username, this.password);
      if (logInStatus.status) {
        await this.LOGGED_IN_SET(logInStatus.tokens);
        this.$router.push("/");
      } else {
        //TODO  show error modal
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