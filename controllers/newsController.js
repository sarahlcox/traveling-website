var axios = require("axios");

import getState from "./newsHelper/covidStates.js";
// const result = dotenv.config()
// console.log("env", process.env)
const newsController = {

getNews : getState()


}
module.exports = newsController;