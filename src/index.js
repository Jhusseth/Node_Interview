// Const
const express = require('express');
const morgan = require('morgan');
var path = require("path");

const {uploadDatabase} = require('./config/lib/files')

// Inicialization
const app = express();

//upload DataBase--> Drop tables and upload data
try{
    uploadDatabase(path.resolve('src/config/data/resource_accommodation.csv'))
}
catch(e){
    console.error(e.name + ': ' + e.message)
}


// Settings
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'jade');


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/",require('./routes/api/index'));

// Server
app.listen(app.get('port'), () => {
    console.log('Server listening on port: ', app.get('port'));
});
