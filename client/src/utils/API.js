import axios from "axios";

export default {
  // Gets all data
    getState: function(stateInput) {
        console.log("front end api.js getstate");
        return axios.get("/api/news/" + stateInput)
    },
    getFlight: function(flightInput){
      console.log("my FI", flightInput)
      return axios.post("/api/flights", flightInput)
    },
    getHotels: function(hotelsInput) {
      return axios.post("/api/hotels", hotelsInput)
    }
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
