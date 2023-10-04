const { Pool } = require('pg');
const db = require('./database');

const testDB = async() => { 
    try{
        const results = await db.query(`select * from card_42`);
        console.log('json data',results);
    }catch(error){
        console.log(error);
    }
 }

testDB();

module.export = testDB;