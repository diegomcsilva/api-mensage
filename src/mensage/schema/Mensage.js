import mongoose from 'mongoose'

const Mensage = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    mensage: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Mensage', Mensage)
