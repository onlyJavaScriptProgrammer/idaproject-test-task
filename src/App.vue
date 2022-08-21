<template>
  <div class="container">
    <add-header />
    <main class="main">
      <add-form />
      <div class="main__grid" v-if="isVisible">
        <add-card
          v-for="good in getGoods"
          :key="good.id"
          :titleCard="good.title"
          :linkCard="good.link"
          :priceCard="good.price"
          :descrCard="good.descr"
        />
      </div>
      <div class="main__none" v-if="!isVisible">
        Здесь пока что ничего нет...
      </div>
    </main>
  </div>
</template>

<script>
import AddHeader from "./components/Header.vue";
import AddForm from "./components/Form.vue";
import AddCard from "./components/Card.vue";

import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    AddForm,
    AddHeader,
    AddCard,
  },
  created() {
    this.getCards();
    this.getGoods;
  },
  methods: {
    ...mapMutations(["getCards"]),
  },
  computed: {
    ...mapState(["isVisible"]),
    ...mapGetters(["getGoods"]),
  },
};
</script>

<style lang="scss">
.container {
  width: 1376px;
  margin: 0 auto;
}
.main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  &__grid {
    width: 1028px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  &__none {
    font-weight: 400;
  }
}
</style>
