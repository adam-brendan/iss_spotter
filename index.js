// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  return ip;
});

fetchCoordsByIP("76.70.94.91", (error, data) => {
    if (error) {
        console.log("It didn't work!" , error);
        return;
      }
    return data;
});

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, passTimes) => {
    if (error) {
        console.log("It didn't work!" , error);
        return;
      }
    
      console.log('It worked! Returned flyover times:' , passTimes);
});