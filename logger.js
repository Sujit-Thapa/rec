var url='http://mylogger.io/log';

function log(message){

    // send an HTTP request
    console.log(message);
}

module.exports.log= log;

// yoy can also write
// module.exports=log;
// exports.log=log;
