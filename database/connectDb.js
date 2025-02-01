const mongoose = require("mongoose");
const local_url = "mongodb://localhost:27017/College-Portal-Project";

const connectDb = () => {
  return mongoose
    .connect(local_url)
    .then(() => {
      console.log("Connect");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDb;
