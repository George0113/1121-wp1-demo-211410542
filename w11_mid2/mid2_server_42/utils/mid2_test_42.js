import db from './database.js'

const testDB = async () => {
    try {
        const results = await db.query(`select * from menu_42`);
         console.log('json data', JSON.stringify(results.rows));
    }catch(error){
            console.log(error);
        }
}

testDB();

export default testDB;