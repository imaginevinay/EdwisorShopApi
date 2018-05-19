const response = require('./../response/responseLib');

let errorHandler = (err,req,res,next) =>{
    console.log("Error Handler called")
    console.log(err)
    res.send('Error Occured -> Cannot Implement');
}

let routeNotFoundHandler = (req,res,next) =>{
    let apiResponse = response.generate(true,'Route not found', 404, null)
    res.send(apiResponse);
}

module.exports ={
    errorHandler : errorHandler,
    routeNotFoundHandler : routeNotFoundHandler
}