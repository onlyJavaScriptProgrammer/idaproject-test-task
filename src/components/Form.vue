<template>
  <form action="#" class="form">
    <div class="form__name" :class="{ mbn: isDangerTitle }">
      <div class="form__name_title">
        <div>Наименование товара</div>
        <span></span>
      </div>
      <input
        type="text"
        class="form__name_input"
        placeholder="Введите наименование товара"
        :class="{ danger: isDangerTitle }"
        v-model="title"
        @input="validate"
      />
    </div>
    <div class="valid" v-if="isDangerTitle">Поле является обязательным</div>
    <div class="form__descr">
      <div class="form__descr_title">Описание товара</div>
      <textarea
        name="description"
        class="form__descr_textarea"
        placeholder="Введите описание товара"
        v-model="descr"
      ></textarea>
    </div>
    <div class="form__links" :class="{ mbn: isDangerLink }">
      <div class="form__links_title">
        <div>Ссылка на изображение товара</div>
        <span></span>
      </div>
      <input
        type="url"
        class="form__links_input"
        placeholder="Введите ссылку"
        :class="{ danger: isDangerLink }"
        v-model="link"
        @input="validate"
      />
    </div>
    <div class="valid" v-if="isDangerLink">Поле является обязательным</div>
    <div class="form__price" :class="{ mbn: isDangerPrice }">
      <div class="form__price_title">
        <div>Цена товара</div>
        <span></span>
      </div>
      <input
        type="text"
        class="form__price_input"
        placeholder="Введите цену"
        :class="{ danger: isDangerPrice }"
        v-model.number="price"
        @input="validate"
        @blur="setMask"
      />
    </div>
    <div class="valid" v-if="isDangerPrice">Поле является обязательным</div>
    <button
      class="form__submit"
      :disabled="isDisabled"
      @click.prevent="pushData"
    >
      Добавить товар
    </button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AddForm",
  data() {
    return {
      isDisabled: true,
      isDangerTitle: false,
      isDangerLink: false,
      isDangerPrice: false,
      title: null,
      link: null,
      price: null,
      descr: null,
    };
  },
  methods: {
    ...mapMutations(["addCard"]),
    pushData() {
      const dataCard = {
        id: Number(new Date()),
        title: this.title,
        link: this.link,
        price: this.price,
        descr: this.descr,
      };
      this.addCard(dataCard);
      this.isDisabled = true;
      this.title = this.link = this.price = this.descr = "";
    },
    validate() {
      if (!this.title) {
        this.isDangerTitle = true;
      } else {
        this.isDangerTitle = false;
      }

      if (!this.link) {
        this.isDangerLink = true;
      } else {
        this.isDangerLink = false;
      }

      if (!this.price) {
        this.isDangerPrice = true;
      } else {
        this.isDangerPrice = false;
      }

      !this.title || !this.link || !this.price
        ? (this.isDisabled = true)
        : (this.isDisabled = false);
    },
    setMask() {
      this.price = this.price.toLocaleString("ru");
    },
  },
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
    margin-top: 24px;
    color: #ffffff;
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
  background: $valid_form;
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
.danger {
  border: 1px solid $valid_form;
  &:focus {
    outline: none;
    border: 1px solid $valid_form;
  }
}

.valid {
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  color: $valid_form;
  margin: 4px 0 2px 0;
}

.mbn {
  margin-bottom: 0;
}
</style>
