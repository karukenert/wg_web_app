<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

main {
  padding-top: 16px;
}

body {
  font-family: "montserrat", sans-serif;
  text-align: center;
}
</style>
