const { Pool } = require('pg');

let pool;

pool = new Pool({
    user:'postgres',
    host:'localhost',
    port:'5432',
    password:'0000',
    database:'wp1_demo_42'
});

const testDB = async() => { 
    try{
        const results = await pool.query(`select * from card_42`);
        console.log('json data',results.rows);
    }catch(error){
        console.log(error);
    }
 }

testDB();



console.log('connect database', pool.options);

module.export = pool;