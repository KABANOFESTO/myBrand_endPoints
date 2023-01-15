import express from "express";
import routes from "./routers";
import cors from 'cors'
const app = express();
import dotenv from 'dotenv'
const { json } = require('express')
const fileUploader = require('express-fileupload')
import { dbConnect } from './config/db.config'

dotenv.config()

const PORT=process.env.PORT || 3000

dbConnect();
// passports

app.use(cors());
app.use(json())
app.use(fileUploader({ useTempFiles: true }))

app.listen(PORT, () => {
    console.log("Server has started on PORT "+PORT+'!');
});

app.use("/api", routes);





export default app