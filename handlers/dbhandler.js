const mongoose=require('mongoose');

function connect(DBURI){
    mongoose.connect(DBURI, {dbName:"TESTDB"});
}