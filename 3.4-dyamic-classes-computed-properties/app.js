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
          isFav: true,
        },
        {
          title: "The Two Towers",
          author: "Tolkien",
          img: "assets/2.jpeg",
          isFav: true,
        },
        {
          title: "The Return of the King",
          author: "Tolkien",
          img: "assets/3.jpeg",
          isFav: true,
        },
      ], // end books
    };
  }, // end data

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  }, // end methods

  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  }, // end computed
}); // end app

app.mount("#app");
