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
    },
    getAll: async (req,res) => {
        try {
            const parties = await PartyModel.find();
            res.status(200).json({parties});
        } catch (err) {
            console.log(err);
        }
    },
    getOne: async (req,res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);

            if(!party){
                res.status(404).json({msg: "Party not found"});
                return;
            }
            res.status(200).json({party});
        } catch (err) {
            console.log(err);
        }
    },
    deleteParty: async (req,res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);
        
            if(!party){
                res.status(404).json({msg: "Party not found"});
                return;
            }

            const deletedParty = await PartyModel.findByIdAndDelete(id);
            res.status(200).json({deletedParty, msg: "Party deleted successfully"});

        } catch (err) {
            console.log(err);
        }
    },
    updateParty: async (req,res) => {
        try {
            const id = req.params.id;
            const party = {
                title: req.body.title,
                author : req.body.author,
                describe: req.body.describe,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services,
            }

            if(!party){
                res.status(404).json({msg: "Party not found"});
                return;
            }

            const updateParty = await PartyModel.findByIdAndUpdate(id,party);
            res.status(200).json({updateParty,msg: "Party updated successfully"});

        } catch (err) {
            console.log(err);
        }
    }
}


module.exports = partyController;