import { model, Schema } from "mongoose";

const DoctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    OPDtimings: {
        type: String,
        required: true
    },
})

const Doctor = model('Doctor', DoctorSchema)

export default Doctor