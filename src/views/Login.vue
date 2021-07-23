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

      <div
        v-if="password.length > 0 && password.length < 6"
        class="text-danger"
      >
        Password should be greater than 6 characters
      </div>

      <button type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    login: function () {
      console.log(
        `Username is ${this.username} \nPassword is ${this.password}`
      );
    },
  },
};
</script>

<style scoped>
/* TODO use css grid */
</style>