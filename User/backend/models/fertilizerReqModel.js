import mongoose from 'mongoose';



const fertilizerReqSchema = new mongoose.Schema({
    farmerid: {
        type: String,
        required: true,
        unique: true
    },
    fertilizertype: {
        type: String,
        required: true
    },
    quantity: { 
        type: Number,
        required: true
    },
    prioritylevel: { 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    warehousename: {
        type: String,
        required: true
    },
    reqManager: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Assuming you have a User model
      },

});

export default mongoose.model('FertilizerReq', fertilizerReqSchema);