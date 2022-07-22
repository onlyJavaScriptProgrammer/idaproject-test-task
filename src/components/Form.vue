<template>
  <form action="#" class="form">
    <div class="form__name">
      <div class="form__name_title">
        <div>Наименование товара</div>
        <span></span>
      </div>
      <input
        type="text"
        class="form__name_input"
        placeholder="Введите наименование товара"
        required
      />
    </div>
    <div class="form__descr">
      <div class="form__descr_title">Описание товара</div>
      <textarea
        name="description"
        class="form__descr_textarea"
        placeholder="Введите описание товара"
      ></textarea>
    </div>
    <div class="form__links">
      <div class="form__links_title">
        <div>Ссылка на изображение товара</div>
        <span></span>
      </div>
      <input
        type="text"
        class="form__links_input"
        placeholder="Введите ссылку"
        required
      />
    </div>
    <div class="form__price">
      <div class="form__price_title">
        <div>Цена товара</div>
        <span></span>
      </div>
      <input
        type="text"
        class="form__price_input"
        placeholder="Введите цену"
        required
      />
    </div>
    <button class="form__submit" disabled>Добавить товар</button>
  </form>
</template>

<script>
export default {
  name: "AddForm",
};
</script>

<style lang="scss" scoped>
.form {
  width: 332px;
  min-height: 440px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
  position: sticky;
  top: 0;
  margin-right: 16px;
  &__name {
    margin-bottom: 16px;
    &_title {
      @include title_form;
    }
    &_input {
      @include inp;
      height: 36px;
      padding: 10px 0 11px 16px;
    }
  }
  &__descr {
    margin-bottom: 16px;
    &_title {
      @include title_form;
    }
    &_textarea {
      @include inp;
      height: 108px;
      padding: 10px 0 0 16px;
      resize: none;
      &:focus {
        outline: none;
        border: 1px solid #9b9999;
      }
      &:hover {
        transform: translateY(1px);
        transition: 0.5ms all;
      }
    }
  }
  &__links {
    margin-bottom: 16px;
    &_title {
      @include title_form;
    }
    &_input {
      @include inp;
      height: 36px;
      padding: 10px 0 11px 16px;
    }
  }
  &__price {
    margin-bottom: 24px;
    &_title {
      @include title_form;
    }
    &_input {
      @include inp;
      height: 36px;
      padding: 10px 0 11px 16px;
    }
  }
  &__submit {
    width: 284px;
    height: 36px;
    border-radius: 10px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    background: #7bae73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
    cursor: pointer;
    &:disabled {
      background: #eeeeee;
      color: #b4b4b4;
      box-shadow: none;
    }
  }
}
span {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: #ff8484;
}

input {
  &:focus {
    outline: none;
    border: 1px solid #9b9999;
  }
  &:hover {
    transform: translateY(1px);
    transition: 0.5ms all;
  }
}
</style>
