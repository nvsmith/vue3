const app = Vue.createApp({
  data() {
    return {
      url: "https://webdesignbynate.com",
      showBooks: true,
      books: [
        {
          title: "The Fellowship of the Ring",
          author: "Tolkien",
          img: "assets/1.jpeg",
        },
        { title: "The Two Towers", author: "Tolkien", img: "assets/2.jpeg" },
        {
          title: "The Return of the King",
          author: "Tolkien",
          img: "assets/3.jpeg",
        },
      ],
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  }, // end methods
}); // end app

app.mount("#app");
