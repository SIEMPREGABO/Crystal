import mongoose from 'mongoose';
const URITAG = "mongodb://127.0.0.1:27017/Crystal";
const URI = URITAG ? URITAG: 'mongodb://127.0.0.1:27017/dbtest';

export const connectDB = async () => {
    try {
        await mongoose.connect(URI,{useNewUrlParser: true});
        console.log("BD connected");
    } catch (error) {
        console.log(error);
    }
};
 
/*
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});*/