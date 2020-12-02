var axios = require("axios").default;
function getState(){
  console.log("covid state?");
  axios
  .get('https://covidtracking.com/api/states')
  .then (results => {
    console.log("results",results);
    return results} 
    )
    .catch(err => res.status(422).json(err));
}
// var options = {
//   method: 'GET',
//   url: 'https://covidtracking.com/api/states',
// };

// var axiosreq = await axios.request(options);
// console.log("????????");
//     // console.log("State Function" ,axiosreq.data);
//     return axiosreq.data;
// }

module.exports = getState;
