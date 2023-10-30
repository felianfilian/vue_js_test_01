const app = Vue.createApp({
  data() {
    return {
      stock: 1,
      text: "mario and luigi",
      showBro: true,
      nameList: [
        { name: "Peach", age: 23 },
        {
          name: "Bowser",
          age: 58,
        },
      ],
    };
  },
});
app.mount("#app");
