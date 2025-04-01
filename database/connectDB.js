const mongoose = require("mongoose");
const local_url = "mongodb://localhost:27017/collegePortalProject";

const live_url =
  "mongodb+srv://jatinpal25072002:Jatin1234@cluster0.fk1wz.mongodb.net/College-Portal-Project";

const connectDB = () => {
  return mongoose
    .connect(live_url)
    .then(() => {
      console.log("connectDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectDB;
