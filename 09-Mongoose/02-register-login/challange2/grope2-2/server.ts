console.log("Connected!");
import express from "express";
import mongoose from "mongoose";
require("dotenv").config();
const url = process.env.MONGODB_URL;
const app = express();
const port = process.env.PORT || 4004;
app.use(express.static('public'));
app.use(express.json());

import usersRoutes from "./routes/UserRoute";
app.use('/users', usersRoutes);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Failed to connect to DB:");
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`Express is listening at ${port}`);
});


