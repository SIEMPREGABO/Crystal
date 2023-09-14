import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './database.js';


async function main(){
    try{
        await connectDB();
        app.listen(app.get('port'));
        console.log('Server on port',app.get('port'));
    } catch (error) {
        console.error(error);
    }
}

main();