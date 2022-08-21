import { createStore } from "vuex";

export default createStore({
  state: {
    goods: [],
    isVisible: false,
    defaultDescr:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
  },
  mutations: {
    addCard(state, payload) {
      state.goods.push(payload);
      localStorage.setItem("goods", JSON.stringify(state.goods));
      if (state.goods.length) {
        state.isVisible = true;
      }
    },
    getCards(state) {
      if (localStorage.getItem("goods")) {
        let strData = localStorage.getItem("goods");
        const data = JSON.parse(strData);
        state.goods.push(...data);
        state.isVisible = true;
      } else {
        return [];
      }
    },
  },
  actions: {},
  modules: {},
});
