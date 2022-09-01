const app = Vue.createApp({
  data() {
    return {
      showBooks: false,
      title: "West of Eden",
      author: "Harry Harrison",
      year: 1984,

      showBooks2: false,
      title2: "East of Eden",
      author2: "John Steinbeck",
      year2: 1952,
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleShowBooks2() {
      this.showBooks2 = !this.showBooks2;
    },
  },
}); // end app

app.mount("#app");
