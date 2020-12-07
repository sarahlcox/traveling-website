import axios from "axios";


export default {
  // Gets all data
    getState: function(stateInput) {
        return axios.get("/api/news/" + stateInput)
    },
    getFlight: function(flightInput){
      return axios.post("/api/flights", flightInput)
    },
    getHotels: function(hotelsInput) {
      return axios.post("/api/hotels", hotelsInput)
    },
    getAttractions: function (attractionsInput) {
      return axios.post("/api/attractions", {city2:attractionsInput})
    },
    saveSearch: function(searchInput){
      return axios.post("/api/save", searchInput)
    },
    getSearch: function(userId){
      return axios.get("/api/save/" + userId)
    }
};
