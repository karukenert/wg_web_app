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

export default {
  name: "login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    ...mapActions(["LOGGED_IN_SET_STATUS"]),
    async login() {
      const response = await axios.post(
        "https://wgwebserver.herokuapp.com/user/login",
        {
          username: this.username,
          password: this.password,
        }
      );
      if (response.status === 200) {
        await this.LOGGED_IN_SET_STATUS(true);
        this.$router.push("/");
        // TODO Store tokens in vuex store
        // res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken });
      }
      // TODO add failure modal
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scoped>
</style>