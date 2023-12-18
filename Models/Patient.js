const mongoose = require('mongoose')
const Patient_vitals = require('./Patient_vitals');
const Vitals = require('./Patient_vitals');




const patientSchema = mongoose.Schema(
    {
        Patient_ID:{
            type : String,
            required: [true, 'Please provide patient ID!']
        },
        Surname:{
            type : String,
            required: [true, 'Please provide patient surname!']
        },   
        Other_names:{
            type : String,
            required: [true, 'Please provide patients other names!']
        },
        Gender:{
            type : String,
            required: [true, 'Please provide patient gender!']
        },
        Phone_Number:{
            type : String
        },
        Residential_Address:{
            type : String
        },
        Emergency_name:{
            type : String,
            required: [true, 'Please provide emergency contact name!']
        },
        Surname:{
            type : String,
            required: [true, 'Please provide patient surname!']
        }, 
        Contact:{
            type : String,
            required: [true, 'Please provide emergency contact contact information!']
        },
        Relationship:{
            type : String
        },
        Vitals:{
            type:mongoose.Schema,
        }

        
    }
)
    {
        timestamps:true
    }
    

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;