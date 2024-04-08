const { Party: PartyModel } = require('../models/Party.js')
const checkBudget = (budget, services) => {
    const price = services.reduce((soma, service) => soma + service.price,0);

    if (price > budget){
        return false;
    }

    return true

}


const partyController = {
    create: async (req,res) => {
        try{
            const party = {
                title: req.body.title,
                author : req.body.author,
                describe: req.body.describe,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services,
            }

            if (party.budget && !checkBudget){
                res.status(406).json({message: "Budget is not enough"});
                return
            }
            const response =  await PartyModel.create(party);

            res.status(201).json({response,msg: "Party created successfully"});
        }catch(err){
            console.log(err);
        }
    }
}


module.exports = partyController;