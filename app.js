// vue isntance erstellen
// 1 oder mehrere vue instances

new Vue({
  // root element
  el: "#app",
  data: {
    names: ["mario", "luigi", "yoshi"],
    persons: [
      { name: "bowser", age: 43 },
      {
        name: "peach",
        age: 25,
      },
    ],
  },
});
