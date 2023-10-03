// vue isntance erstellen
// 1 oder mehrere vue instances

new Vue({
  // root element
  el: "#app",
  data: {
    myValue: 10,
  },
  methods: {
    add: function () {
      this.myValue++;
    },
    subtract: function () {
      this.myValue--;
    },
  },
});
