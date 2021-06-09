<template>
  <div class="container">
    <h1>Register</h1>

    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="userName"
              v-model="username"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="fullName"
              v-model="fullName"
              placeholder="Full name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Password"
            />
          </div>
          <br />
          <button v-on:click="register" class="btn btn-primary">Sign up</button>
        </form>
      </div>
      <div class="col-md-3"></div>
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
</style>