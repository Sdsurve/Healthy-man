import { Model,Schema,model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address:{
        type:String
        },
    mobile:{
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    role: { type: String, required: true }
    },{
        timestamps: true
    });
    const User = model('User',userSchema)
    export default User