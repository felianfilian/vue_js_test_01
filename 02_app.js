const app = Vue.createApp({
  data() {
    return {
      message: "Super Metroid",
      isImportant: true,
      myClass: "red",
    };
  },
});
app.mount("#app");
