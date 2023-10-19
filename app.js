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

  methods: {
    checkPassword(password) {
      return this.users.filter((user) => password === user.password);
    },
    checkCredentials(event) {
      event.preventDefault();
      if (
        this.username === this.currentUser &&
        this.checkPassword(this.password).length !== 0
      ) {
        this.feedback = "good credentials";
      } else {
        this.feedback = "bad credentials";
      }
    },
    changeUser(name) {
      this.currentUser = name;
    },
  },
});
