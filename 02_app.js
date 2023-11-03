const app = Vue.createApp({
  data() {
    return {
      newText: "...",
    };
  },
  methods: {
    writeText() {
      this.newText = "Mario";
    },
  },
});
app.mount("#app");
