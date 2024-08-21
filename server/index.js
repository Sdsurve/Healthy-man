import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const MnagoConnect = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn) {
        console.log('MongoDB Connected')
    }
    else {
        console.log('MongoDB Not Connected')
    }
}
MnagoConnect();

app.get('/health', (req, res) => {
    res.send('Server is running')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
