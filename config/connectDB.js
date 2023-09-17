const mongoose = require("mongoose")

const connectDB = async()=> {

    try {
        await mongoose.connect(process.env.MONGO_URL) 
        console.log(` database connected ... server running on ${mongoose.connection.host}`)
        
    } catch (error) {

        console.log(error, colors.bgRed)
        
    }
}

module.exports = connectDB