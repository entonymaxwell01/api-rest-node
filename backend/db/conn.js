const mongoose = require("mongoose");
require('dotenv').config();

async function main(){
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@projeto-api-nodejs.yaxuoz6.mongodb.net/?retryWrites=true&w=majority&appName=projeto-api-nodejs`);        
        console.log("Conectado ao banco de dados");
    }catch (err){
        console.log(err);
    }

}

module.exports = main;