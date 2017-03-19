// mike's test file uploads
var http = require('http');
var path = require('path');

var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });


var app = express();
var server = http.createServer(app);

 
app.use(express.static(path.resolve(__dirname, 'client')));

app.post('/cool-profile', upload.single('testfile','filesize'), function(req, res, next){
     res.contentType('application/json');
      console.log("file loaded");

        res.send(req.file);
        

// console.log(req.file);


});

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("file upload listening at", addr.address + ":" + addr.port);
});
