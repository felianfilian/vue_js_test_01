let vueOne = new Vue({
  el: "#app",
  data: {
    username: "",
    password: "",
    currentUser: "",
    feedback: "",
    users: [
      { name: "mario", password: "123" },
      { name: "luigi", password: "abc" },
    ],
  },
});
