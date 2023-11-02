const app = Vue.createApp({
  data() {
    return {
      stock: 1,
      text: "mario and luigi",
      showBro: true,
      mossCount: 0,
      textColor: "black",
      nameList: [
        { name: "Peach", age: 23 },
        {
          name: "Bowser",
          age: 58,
        },
      ],
    };
  },
  methods: {
    changeColor() {
      this.textColor = "red";
    },
  },
});
app.mount("#app");
