require('dotenv').config();
const mongoose = require('mongoose');

const express =  require('express');
const app = express();

const router = require('./routes/api_routes')

const DBURI = process.env.DBURI;
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, startup);

async function startup(){
    console.log(`App has started @ port ${PORT}`)
    
    mongoose.connect(DBURI, {dbName:"TESTDB"})
    .then(res => {
        console.info('Connected to DB!');
    })
    .catch(err => {
        console.error('could not connect to db');
        console.log('error: ', err)
    })
}