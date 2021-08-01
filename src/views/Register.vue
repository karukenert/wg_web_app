<template>
  <div>
    <h1>Register</h1>

    <form @submit.prevent="register" v-if="!loading">
      <input
        type="text"
        class="form-control"
        id="userName"
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

      <div
        v-if="password.length > 0 && password.length < 6"
        class="text-danger"
      >
        Password should be greater than 6 characters
      </div>

      <button type="submit">Sign up</button>
    </form>

    <Loading v-else />
  </div>
</template>

<script>
import axios from "axios";
import * as Constants from "@/constants.js";
import Loading from "@/components/Loading.vue";

export default {
  name: "register",
  components: { Loading },
  data: () => ({
    username: "",
    fullName: "",
    email: "",
    password: "",
    loading: false,
  }),
  methods: {
    async register() {
      this.loading = true;
      const response = await axios.post(`${Constants.BASE_URL}/user/signup`, {
        username: this.username,
        password: this.password,
      });
      if (response.status === 201) {
        this.loading = false;
        this.$router.push("/login");
      }
      // TODO #12 add failure modal
      // TODO #13 add user already exist modal
      // TODO #14 prevent submit if the pw doesn't match criterias
    },
  },
};
</script>

<style scoped>
/* TODO styling for registering window*/
</style>