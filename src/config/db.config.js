import mongoose from "mongoose";

exports.dbConnect = () => {
  mongoose
    .connect(`${process.env.DB_URL}`, {

      useNewUrlParser: true,
    })
    .then(() => {
        
      console.log("Connected to DB ")
    });
};