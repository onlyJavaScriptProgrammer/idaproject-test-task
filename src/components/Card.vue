<template>
  <div class="card">
    <img src="../static/img/card_img.png" alt="good" class="card__img" />
    <div class="card__wrap">
      <div class="card__title">Название товара</div>
      <div class="card__descr">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </div>
      <div class="card__price">10 000 руб.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCard",
};
</script>

<style lang="scss" scoped>
.card {
  width: 332px;
  height: 423px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &__img {
    border-radius: 4px 4px 0px 0px;
    margin-bottom: 16px;
  }
  &__wrap {
    padding: 0 16px 24px;
  }
}
</style>
