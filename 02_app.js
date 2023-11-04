const app = Vue.createApp({
  data() {
    return {
      health: 0,
    };
  },

  methods: {
    updateHealth(amount) {
      this.health += amount;
      console.log("pwr up");
    },
  },
});
app.mount("#app");
