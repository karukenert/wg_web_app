<template>
  <div class="container">
    <h1>Login</h1>

    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              required
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
              placeholder="Password"
            />
          </div>
          <div
            v-if="password.length > 0 && password.length < 6"
            class="text-danger"
          >
            Password should be greater than 6 characters
          </div>

          <button class="btn btn-primary" v-on:click="login">Log in</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
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
</style>