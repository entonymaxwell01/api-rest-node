const router = require("express").Router();

const serviceController = require("../controllers/serviceController.js");

router.route("/services").post((req,res) =>{
    serviceController.create(req,res);
});

module.exports = router;