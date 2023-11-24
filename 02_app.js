const app = Vue.createApp({
  data() {
    return {
      itemName: null,
      itemNumber: null,
      important: false,
      shoppingList: [{ name: "milk", number: 5 }],
    };
  },
  methods: {
    addItem() {
      let item = {
        name: this.itemName,
        number: this.itemNumber,
        important: this.important,
      };
      this.shoppingList.push(item);
      this.itemName = null;
      this.itemNumber = null;
    },
  },
});
app.mount("#app");
