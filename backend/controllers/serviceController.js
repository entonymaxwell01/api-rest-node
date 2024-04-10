const {Service: ServiceModel, Service} = require("../models/Service.js");

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

            res.status(201).json({response, msg: "Service created successfully"});
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
            
            if(!service){
                res.status(404).json({msg: "Service not found"});
                return;
            }

            res.status(200).json({service});
        }
        catch(err){
            console.log(err);
        }
    },
    deleteService: async(req,res) => {
        try{
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            
            if(!service){
                res.status(404).json({msg: "Service not found"});
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id);
            res.status(200).json({deletedService, msg: "Serviço deletado com sucesso"});
        }catch(err){
            console.log(err);
        }

    },
    updateService: async(req,res) => {
        try{
            const id = req.params.id;

            const service = {
                name: req.body.name,
                describe: req.body.describe,
                price: req.body.price,
                image: req.body.image,
            };

            const updateService = await ServiceModel.findByIdAndUpdate(id,service);

            if(!updateService){
                res.status(404).json({msg: "Serviço não encontrado"});
                return;
            }

            res.status(200).json({service,msg:"Serviço atualizado"});
        }catch(err){
            console.log(err);
        }
    }
}


module.exports = serviceController;