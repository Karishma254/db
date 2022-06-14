const Bottle = require("../controller/bottle")
const express = require("express");
const router = express.Router();



router.post("/add/bottle", Bottle.addBottel);

//Get all 
// router.get("/get/all/bottle", Bottle.getAllBottle);



module.exports = router;
