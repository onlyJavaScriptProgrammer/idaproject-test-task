<template>
  <div class="container">
    <add-header />
    <main class="main">
      <add-form />
      <div class="main__grid">
        <add-card />
        <add-card />
        <add-card />
        <add-card />
        <add-card />
        <add-card />
        <add-card />
        <add-card />
        <add-card />
        <add-card />
      </div>
    </main>
  </div>
</template>

<script>
import AddHeader from "./components/Header.vue";
import AddForm from "./components/Form.vue";
import AddCard from "./components/Card.vue";

export default {
  name: "App",
  components: {
    AddForm,
    AddHeader,
    AddCard,
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
  justify-content: flex-end;
  &__grid {
    width: 1028px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}
</style>
