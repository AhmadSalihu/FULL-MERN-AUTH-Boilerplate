const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://mjtech:mjtech1234@cluster0.zeawt.mongodb.net/bank-api?retryWrites=true&w=majority"
const connectDB = async () => {
    const connection = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
}; 

module.exports = connectDB;