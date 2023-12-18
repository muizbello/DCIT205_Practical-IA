const mongoose = require('mongoose')

const vitalsSchema = mongoose.Schema(
    {
        Patient_ID:{
            type : String,
            required: [true, 'Please provide patient ID!']
        },
        Temperature:{
            type : Number,
            required: [true, 'Please provide patient temperature!']
        },   
        Blood_pressure:{
            type : String,
            required: [true, 'Please provide patient blood pressure!']
        }, 
        Oxygen_Saturation:{
            type: Number,
            require:[true, 'please provide the SP02 level!']
        }
    }
)
    {
        timestamps:true
    }
    

const Vitals = mongoose.model('Vitals', vitalsSchema);
module.exports = Vitals;