const app = Vue.createApp({
  data() {
    return {
      health: 0,
    };
  },

  methods: {
    updateHealth(amount) {
      this.health += amount;
    },
  },
});
app.mount("#app");
