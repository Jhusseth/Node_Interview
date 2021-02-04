// Const
const express = require('express');
const morgan = require('morgan');

// Inicialization
const app = express();


// Settings
app.set('port', process.env.PORT || 4000);

app.set('view engine', 'jade');


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('./routes/api/index'));

// Server
app.listen(app.get('port'), () => {
    console.log('Server listening on port: ', app.get('port'));
});
