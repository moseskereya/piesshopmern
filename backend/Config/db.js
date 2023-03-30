const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log('Database is connected')
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;