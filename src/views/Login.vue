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
import { mapGetters } from "vuex";
const userService = require("@/services/userService");

export default {
  name: "login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async logUserIn() {
      let status = await userService.logIn(this.username, this.password);
      if (status) this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scoped>
</style>