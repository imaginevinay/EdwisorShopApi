const express = require ('express');
const fs = require('fs');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const bodyParser = require ('body-parser');
const appConfig = require ('./config/appConfig');
const logger = require('./response/loggerLib')
const errorHandler = require('./middlewares/appErrorHandler');
const http = require('http')
const helmet = require('helmet')


const app = express();

//adding middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

//error handler middleware
app.use(errorHandler.errorHandler);
//hide useful headers to make the api more sequre
app.use(helmet())

//modelsPath
let modelsPath = './models';
fs.readdirSync(modelsPath).forEach(function(file){
    if(~file.indexOf('.js')){
        require(modelsPath + '/' + file);
    }
})

//routesPath
let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function(file){
    if(~file.indexOf('.js')){
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
})

//route not found error display
app.use(errorHandler.routeNotFoundHandler);

/**
 * create HTTP Server
 */

 const server = http.createServer(app)
 //start listening to the https server
 server.listen(appConfig.port)
 server.on('error', onError)
 server.on('listening', onListening)
//end server listen

/**
 * Event listening for error messages
 */
function onError(error){
    if(error.syscall !== 'listen'){
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }
    //handle specific error so useing switch case
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}
/**
 * Event listening for server listening messages
 */
function onListening (){
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    
    //logger.info('addr.port', 'serverOnListeningHandler', 10)
    let db = mongoose.connect(appConfig.db.uri)
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    logger.info('Unhandled Rejection at: Promise', reason, 10);
})


// handling mongoose connection error
mongoose.connection.on('error', function (err) {
    console.log('database connection error');
    console.log(err)

}); // end mongoose connection error

// handling mongoose success event
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);

    } else {
        console.log("database connection open ! Success !");
    }

}) //end mongoose connection