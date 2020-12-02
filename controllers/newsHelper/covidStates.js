var axios = require("axios").default;
function getState(req,res){
  console.log("covid state?");
  axios
  .get('https://api.covidtracking.com/v1/states/current.json')
  .then (results => {
    console.log("results",results.data);
    res.json(results.data)} 
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
