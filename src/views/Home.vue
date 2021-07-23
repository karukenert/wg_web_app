<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld v-if="this.isLoggedIn" msg="Logged in" />
    <HelloWorld v-else msg="Not logged in " />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
