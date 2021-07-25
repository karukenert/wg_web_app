<template>
  <div>
    <div v-if="this.isLoggedIn">Logged in</div>
    <div v-else>Not logged in</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
