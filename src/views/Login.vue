<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="logUserIn" v-if="!loading">
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
    <Loading v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "@/components/Loading.vue";
const userService = require("@/services/userService");

export default {
  components: { Loading },
  name: "login",
  data: () => ({
    username: "",
    password: "",
    loading: false,
  }),
  methods: {
    ...mapActions(["LOGGED_IN_SET"]),
    async logUserIn() {
      this.loading = true;
      let logInStatus = await userService.logIn(this.username, this.password);
      if (logInStatus.status) {
        await this.LOGGED_IN_SET(logInStatus.tokens);
        this.loading = false;
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