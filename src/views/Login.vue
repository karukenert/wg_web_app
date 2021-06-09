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
              id="exampleInputEmail1"
              v-model="username"
              aria-describedby="emailHelp"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
              placeholder="Password"
            />
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