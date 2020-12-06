import axios from "axios";

export default {
  // Gets all data
    getState: function(stateInput) {
        console.log("front end api.js getstate");
        return axios.get("/api/news/" + stateInput)
    },
    getFlight: function(flightInput){
      // console.log("my FI", flightInput)
      return axios.post("/api/flights", flightInput)
    },
    getHotels: function(hotelsInput) {
      return axios.post("/api/hotels", hotelsInput)
    },
    getAttractions: function (attractionsInput) {
      console.log("attractions input", {city2:attractionsInput});
      return axios.post("/api/attractions", {city2:attractionsInput})
    },
    saveSearch: function(searchInput){
      return axios.post("/api/save", searchInput)
    },
};
