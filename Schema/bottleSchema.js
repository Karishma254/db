const mongoose = require("mongoose");

const bottleSchema = new  mongoose.Schema(
    {
        BottelName: {type: String},
        BottelPrice: {type: Number},
        
       
    },
    {
        timestamps: true
    }
)

module.exports =mongoose.model('bottleSchema', bottleSchema);

// module.exports = Bottle;
