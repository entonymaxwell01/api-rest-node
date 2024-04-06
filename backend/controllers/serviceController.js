const {Service: ServiceModel} = require("../models/Service.js");

const serviceController = {
    create: async(req,res) => {
        try {
            const service = {
                name: req.body.name,
                describe: req.body.describe,
                price: req.body.price,
                image: req.body.image,
            }

            const response = await ServiceModel.create(service);

            res.status(201).json({response, msg: "Serviço criado"});
        }catch(err){
            console.log(err);
        }
    },
    getAll: async(req,res) => {
        try {
            const services = await ServiceModel.find();
            res.status(200).json({services});
        }catch(err){
            console.log(err);
        }
    },
    getOne: async(req,res) => {
        try{
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            res.status(200).json({service});
        }
        catch(err){
            console.log(err);
        }
    }
}


module.exports = serviceController;