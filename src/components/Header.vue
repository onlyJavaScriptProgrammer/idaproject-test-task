<template>
  <header class="header">
    <div class="header__title">Добавление товара</div>
    <select class="header__filter">
      <option value="#" hidden>По умолчанию</option>
      <option value="">По возрастанию цены</option>
      <option value="">По убыванию цены</option>
    </select>
  </header>
</template>

<script>
export default {
  name: "AddHeader",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 31px 0 16px 0;
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3f3f3f;
  }
  &__filter {
    @include base_inp;
    width: 121.49px;
    height: 36px;
    padding: 10px 16px 11px;
  }
}
</style>
