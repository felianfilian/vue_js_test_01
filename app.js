// vue isntance erstellen
// 1 oder mehrere vue instances

new Vue({
  // root element
  el: "#app-one",
  data: {
    name: "mario",
  },
  computed: {
    setName() {
      return `${this.name}`;
    },
  },
});
