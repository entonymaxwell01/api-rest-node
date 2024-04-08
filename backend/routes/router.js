const router = require("express").Router();

const servicesRouter = require("./services.js");

const partyRouter = require("./parties.js");

router.use("/",servicesRouter);

router.use("/",partyRouter);

module.exports = router;