const mongoose = require("mongoose");

const { Schema } = mongoose;

const { serviceSchema } = require("./Service.js");

const partySchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        describe: {
            type: String,
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        image:{
            type: String,
            required: true,
        },
        services: {
            type: [serviceSchema],
            require: true,
        }
}, { timestamps: true });

const Party = mongoose.model("Party", partySchema);	

module.exports = { Party, partuSchema }