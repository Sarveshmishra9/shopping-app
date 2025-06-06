import mongoose from 'mongoose'

const connectDB = async() => {
    mongoose.connection.on('connected', ()=>{
        console.log('Connected to MongoDB')
    })
    await mongoose.connect(`${process.env.mongodb_URI}/e-commerce`)
}

export default connectDB;