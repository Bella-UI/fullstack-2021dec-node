import express from 'express';
import mongoose from  'mongoose';

var cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser())

const mongodb_uri = process.env.MONGODB_URI;

mongoose.connect(mongodb_uri).then(res =>{
    console.log("connected to DB");
}).catch(err=>{
    console.log('at mongoose.connect:')
    console.error(err.message)
})



import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute);


app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
  });
  