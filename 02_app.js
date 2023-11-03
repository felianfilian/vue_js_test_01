const app = Vue.createApp({
  data() {
    return {
      newText: "...",
    };
  },
  methods: {
    updateText(event) {
      this.newText = event.target.value;
    },
  },
});
app.mount("#app");
