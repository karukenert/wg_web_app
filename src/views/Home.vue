<template>
  <div>
    <div class="layout" v-if="this.isLoggedIn">
      <div class="top">
        <div class="column-header"><h3>Search for a word!</h3></div>
        <form @submit.prevent="fetchWord" v-if="!loading">
          <div>
            <input type="text" v-model="this.queryWord" />
          </div>

          <button type="submit">Search</button>
        </form>
        <Loading v-else />
      </div>

      <div class="left">
        <div class="column-header"><h3>Current word</h3></div>
        <WordCard v-if="'word' in this.word">
          {{ this.word }}
        </WordCard>
      </div>
      <div class="right">
        <div class="column-header"><h3>Saved words</h3></div>
      </div>
    </div>
    <div v-else>Not logged in</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getWord } from "@/services/wordService.js";
import WordCard from "@/components/WordCard.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "Home",
  data: () => ({
    queryWord: "",
    word: {},
    loading: false,
  }),
  components: {
    WordCard,
    Loading,
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getTokens"]),
  },
  methods: {
    async fetchWord() {
      this.loading = true;
      // If empty word, show error
      let response = await getWord(this.queryWord, this.getTokens);

      if (response === false) {
        console.log("no word found");
      } else {
        this.word = response;
      }
      this.loading = false;
    },
  },
};
</script>
<style lang="scss">
.layout {
  display: grid;
  grid-template-areas:
    "top top top"
    "left left right";
  .top {
    grid-area: top;
    background-color: red;
    min-width: 180px;
    padding: 16px;
    height: 100px;
  }

  .left {
    grid-area: left;
    background-color: green;
    min-width: 180px;
    padding: 16px;
    height: 80vh;
  }

  .right {
    grid-area: right;
    background-color: blue;
    min-width: 180px;
    padding: 16px;
    height: 80vh;
  }
}
</style>
