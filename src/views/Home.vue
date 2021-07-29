<template>
  <div>
    <div class="layout" v-if="this.isLoggedIn">
      <div class="top">
        <div class="column-header"><h3>Search for a word!</h3></div>
        <form @submit.prevent="fetchWord">
          <div>
            <input type="text" v-model="this.queryWord" />
          </div>

          <button type="submit">Search</button>
        </form>
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
import { getWord } from "@/services/wordService";
import WordCard from "@/components/WordCard.vue";

export default {
  name: "Home",
  data: () => ({
    queryWord: "",
    word: {},
  }),
  components: {
    WordCard,
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getTokens"]),
  },
  methods: {
    async fetchWord() {
      // If empty word, show error
      this.word = await getWord(this.queryWord, this.getTokens);
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
