require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONTO_URI, {
            useNewUrlParser:true,
            usesUnifiedTopology: true
        });

        console.log("MongoDB connection SUCCESS")
    }catch(error){
     console.error("MongoDB connection FAIL")
     process.exit(1);
    }
}

module.exports = connectDB;