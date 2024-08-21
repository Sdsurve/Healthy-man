import { model,Schema } from "mongoose";
import User from "./User";

const AppointmentSchema = new Schema({
    User:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        },
    doctor:{
        type: Schema.Types.ObjectId,
        ref: 'Doctor',

    },
    appointmentreason:{
        type:String,
        required:true,
        default:'regular checkup'
    },
    appointmentdate:{
        type:Date,
        required:true,
        default:Date.now
    },
    appointmenttype:{
        type:String,
        required:true,
        enum:['First Visit','Follow Up 1','Follow Up 2','Follow Up 3'],
        default:'First Visit'

    },
    status:{
        type:String,
        required:true,
        enum:['pending','In Progress','cancelled','Completed'],
        default:'pending'
    },
    completedAt:{
        type:Date,
    },
    cancelledAt:{
        type:Date,
    }


},{
    timestamps:true,
})
const Appointment = model('Appointment',AppointmentSchema)

export default Appointment