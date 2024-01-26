const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    lname:{
        type:String,
        required:true,
    },
    fname:{
        type:String,
        required:true,
    },
    employee_id:{
        type:Number,
        required:true
    },
    position:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true
    },
    createdDate: {
        type: Date,
        default: Date.now
      },
      updatedDate: {
        type: Date,
        default: Date.now
      }

}
);

module.exports = mongoose.model("Employee",EmployeeSchema)