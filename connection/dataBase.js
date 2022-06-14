// const url = "mongodb+srv://karishma:keema12345678@cluster0.xxfqy.mongodb.net/test"
// const mongoose = require("mongoose");
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// console.log("database connected...")

// const connect = async (url) => {
//   console.log("database connected...")
//   const connection = await mongoose.createConnection(url, options); //Connecting database
//   return connection;
// };

// module.exports = connect;

const mongoose = require("mongoose");

const url = "mongodb+srv://karishma:keema12345678@cluster0.xxfqy.mongodb.net/test"


const options = {
    UseNewUrlParser:true,
    useunifiedtopology:true,
}
.then(()=>{
    console.log("Database is connected ");
})
.catch(()=>{
    console.log(err)
})

const connect = async(url)=>{
    const connection = await mongoose.createConnection(url,options)
    return connection;

}
    
module.exports = connect