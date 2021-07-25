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
            type="text"
            class="form-control"
            id="fullName"
            v-model="fullName"
            disabled
            placeholder="Full name"
          />

          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            disabled
            placeholder="Email address"
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
      const response = await axios.post(`${Constants.BASE_URL}/user/signup`, {
        username: this.username,
        password: this.password,
      });
      if (response.status === 201) {
        await this.LOGGED_IN_SET_STATUS(true);
      }
      // TODO add failure modal
    },
  },
};
</script>

<style scoped>
/* TODO use css grid */
</style>