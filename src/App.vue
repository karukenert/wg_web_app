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
.app {
  max-width: 100%;
}
* {
  margin: 0;
  padding: 0;
}

main {
  padding: 16px;
}

body {
  font-family: "montserrat", sans-serif;
  text-align: center;
}
</style>
