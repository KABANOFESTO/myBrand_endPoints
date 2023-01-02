import express from "express";
import routes from "./routers";
import cors from 'cors'
const app = express();
import dotenv from 'dotenv'
const { json } = require('express')
const fileUploader = require('express-fileupload')
import { dbConnect } from './config/db.config'

dotenv.config()

dbConnect();
// passports

app.use(cors());
app.use(json())
app.use(fileUploader({ useTempFiles: true }))
app.use("/api", routes);



app.listen(3000, () => {
    console.log("Server has started on PORT "+3000+'!');
});
