const mongoose = require("mongoose");
const ConstructionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:false
    }
});
const ConstructionModel = mongoose.model('Construction' , ConstructionSchema);
module.exports = ConstructionModel;