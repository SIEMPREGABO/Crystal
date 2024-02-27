
import app from './app.js';
import { getConnection } from './database.js';


async function main(){
    try{
        const connection  = await getConnection();
        console.log("MySQL connected from index");
        app.listen(app.get('port'));
        console.log('Server on port',app.get('port'));
    } catch (error) {
        console.error(error);
    }
}

main();