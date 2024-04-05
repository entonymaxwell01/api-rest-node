const mongoose = require("mongoose");

async function main(){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://entonymaxwell01:AeSS2Xo8JHtD5fdP@projeto-api-nodejs.yaxuoz6.mongodb.net/");
        console.log("Conectado ao banco de dados");
    }catch (err){
        console.log(err);
    }

}

module.exports = main;