<template>
  <div>
    <div class="logo">Word Guesser</div>

    <div class="nav-items">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <div v-if="!this.isLoggedIn">
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/register">Register</router-link>
      </div>

      <router-link
        class="disableActive"
        v-if="this.isLoggedIn"
        v-on:click="logOut"
        to="/"
        >Log out</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["LOGGED_IN_SET_STATUS"]),
    async logOut() {
      await this.LOGGED_IN_SET_STATUS(false);
    },
  },
};
</script>

<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
  }
}

.logo {
  font-size: 30px;
  font-weight: bold;
  color: #2c3e50;
}

.disableActive {
  &.router-link-exact-active {
    color: #2c3e50;
  }
}
</style>