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
            required
            placeholder="Full name"
          />

          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            required
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
export default {
  name: "register",
  data: () => ({
    username: "",
    fullName: "",
    email: "",
    password: "",
  }),
  methods: {
    register: function () {
      console.log(
        `username: ${this.username} \nfullname: ${this.fullName} \nemail: ${this.email} \npassword: ${this.password}`
      );
    },
  },
};
</script>

<style scoped>
/* TODO use css grid */
</style>