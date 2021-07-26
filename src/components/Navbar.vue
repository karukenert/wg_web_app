<template>
  <nav>
    <div class="left">
      <strong class="logo">Word Guesser</strong>
      <router-link class="menu-item" to="/">Home</router-link>
      <router-link class="menu-item" to="/about">About</router-link>
    </div>

    <div class="right">
      <router-link v-if="!this.isLoggedIn" class="menu-item" to="/login"
        >Login</router-link
      >
      <router-link v-if="!this.isLoggedIn" class="menu-item" to="/register"
        >Register</router-link
      >
      <a v-if="this.isLoggedIn" class="menu-item" v-on:click="logOut">
        Log out
      </a>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import * as Constants from "../constants.js";

export default {
  name: "navbar",
  computed: {
    ...mapGetters(["isLoggedIn", "getRefreshToken"]),
  },
  methods: {
    ...mapActions(["LOGGED_IN_SET"]),
    async logOut() {
      const response = await axios.post(`${Constants.BASE_URL}/user/logout`, {
        token: this.getRefreshToken,
      });
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
nav {
  width: 100vw;
  background-color: aqua;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 0 10px;
  }

  .left,
  .right {
    padding: 10px 0px;
    margin-bottom: 3px;
  }
  .menu-item {
    padding: 10px 20px;
    border-bottom: 3px solid transparent;
    transition: 0.4s;

    color: inherit;
    text-decoration: none;

    &.router-link-exact-active {
      border-bottom-color: black;
      &:hover {
        border-bottom-color: black;
      }
    }
    &:hover {
      border-bottom-color: darkcyan;
      cursor: pointer;
    }
  }
}
</style>