const connect = require("../connection/dataBase");
const config = require("../source/config");
const mongoose = require("mongoose");
const bottleSchema = require("../Schema/bottleSchema");



const url = "mongodb+srv://karishma:keema12345678@cluster0.xxfqy.mongodb.net/test"

// const url =   `mongodb+srv://karishma:Karishma%40123@cluster0.3iy3r.mongodb.net`;
// const url = "mongodb://localhost:27017/multi"

//Connecting to the main admin database
const getAppDb = async (  BottelName) => {
  const dbName = `Multi-${  BottelName}`;
  let db = await connect(url);
  let shopDb = db.useDb(dbName, { useCache: true }); //Create or Use Database with their name
    return shopDb;
};

// //user the model in their respective database
// schema

const Bottle = async (  BottelName) => {
  let BottleDb = await getAppDb(  BottelName);
  return BottleDb.model("bottle", bottleSchema);
};


module.exports ={
  getAppDb,
  Bottle
  
}







