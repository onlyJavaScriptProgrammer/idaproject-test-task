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
  position: relative;
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
    appearance: none;
    padding: 10px 15.46px 11px 16px;
    &:focus {
      outline: none;
      border: 1px solid #9b9999;
    }
    &:hover {
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
      transition: 0.5ms all;
    }
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: 5px;
    border-right: 1px solid #b4b4b4;
    border-bottom: 1px solid #b4b4b4;
    right: 0;
    top: 50%;
    transform: matrix(0.71, 0.71, -0.71, 0.71, -17, -4);
  }
}
</style>
