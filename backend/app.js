const express = require("express");
const cors = require ("cors");
const app = express()

app.use(cors());

app.use(express.json());

//Connection mongoDB
const cnn = require("./db/conn");

cnn();

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});