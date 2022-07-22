<template>
  <div class="container">
    <add-header />
    <add-form />
  </div>
</template>

<script>
import AddForm from "./components/Form.vue";
import AddHeader from "./components/Header.vue";

export default {
  name: "App",
  components: {
    AddForm,
    AddHeader,
  },
};
</script>

<style lang="scss">
.container {
  width: 1376px;
  margin: 0 auto;
}
</style>
