const mongoose = require('mongoose')

const encounterSchema = mongoose.Schema(
    {
        Patient_ID:{
            type : String,
            required: [true, 'Please provide patient ID!']
        },
        Date_and_Time:{
            type : Date,
            required: [true, 'Please provide encounter date!']
        },   
        Type_of_encounter:{
            type : String,
            required: [true, 'Please provide encounter type!']
        }, 
    }
)
    {
        timestamps:true
    }
    

const Encounter = mongoose.model('Encounter', encounterSchema);
module.exports = Encounter;