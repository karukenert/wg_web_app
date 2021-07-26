<template>
  <div>
    <div v-if="this.isLoggedIn">
      <div>Logged in</div>
      <br />
      <form @submit.prevent="fetchWord">
        <div>
          <input type="text" v-model="this.queryWord" />
        </div>

        <button type="submit">Fetch word</button>
      </form>

      <WordCard v-if="'word' in this.word">
        {{ this.word }}
      </WordCard>
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
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    async fetchWord() {
      // If empty word, show error
      this.word = await getWord(this.queryWord);
    },
  },
};
</script>
