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
    }
}


module.exports = serviceController;