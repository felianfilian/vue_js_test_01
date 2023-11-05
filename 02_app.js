const app = Vue.createApp({
  data() {
    return {
      itemValue: null,
      itemNumber: null,
      shoppingList: [{ name: "milk", number: 5 }],
    };
  },
  methods: {},
});
app.mount("#app");
