<template>
  <div>
    <h1>Register</h1>
    <div>
      <div>
        <form @submit.prevent="register">
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as Constants from "../constants.js";
export default {
  name: "register",
  data: () => ({
    username: "",
    fullName: "",
    email: "",
    password: "",
  }),
  methods: {
    async register() {
      // TODO add loading icon and loading boolean to data object
      const response = await axios.post(`${Constants.BASE_URL}/user/signup`, {
        username: this.username,
        password: this.password,
      });
      if (response.status === 201) {
        this.$router.push("/login");
      }
      // TODO add failure modal
    },
  },
};
</script>

<style scoped>
/* TODO styling for registering window*/
</style>