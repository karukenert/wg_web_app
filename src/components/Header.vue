<template>
  <div class="navbar">
    <div class="left">
      <div class="left logo">Word Guesser</div>

      <div class="right text">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <div class="right text">
      <div v-if="!this.isLoggedIn">
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/register">Register</router-link>
      </div>

      <a v-if="this.isLoggedIn" v-on:click="logOut" to="/">Log out</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapGetters(["isLoggedIn", "getRefreshToken"]),
  },
  methods: {
    ...mapActions(["LOGGED_IN_SET"]),
    async logOut() {
      const response = await axios.post(
        "https://wgwebserver.herokuapp.com/user/logout",
        {
          token: this.getRefreshToken,
        }
      );
      if (response.status === 204) {
        await this.LOGGED_IN_SET(false);
        this.$router.push("/");
      } else {
        alert(`We have an error: ${response.data}`);
      }
      // TODO add failure modal
    },
  },
};
</script>

<style lang="scss">
.navbar {
  background-color: aqua;
  width: 100%;
  display: inline-block;
  padding: 16px;

  a {
    color: #2c3e50;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      font-weight: bold;
      color: #42b983;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .right {
    float: right;
  }
  .left {
    float: left;

    &.logo {
      font-weight: bold;
      padding-right: 16px;
      font-size: 16px;
      color: #2c3e50;
    }
  }
}
</style>