// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  return ip;
});

fetchCoordsByIP("76.70.94.91", (error, data) => {
    console.log("ERROR", error);
    console.log("DATA", data);
});