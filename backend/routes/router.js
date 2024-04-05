const router = require("express").Router();

const servicesRouter = require("./services.js");

router.use("/",servicesRouter);

module.exports = router;