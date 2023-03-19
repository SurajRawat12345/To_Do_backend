import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
},{timestamps: true})

export default mongoose.model("todo" , todoSchema);