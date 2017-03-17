//
var http = require('http');
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var router = express();
 
var app = express();
var server = http.createServer(router);
 
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
});
 
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files 
  // req.body will contain the text fields, if there were any 
});
 
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]);
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files 
  // 
  // e.g. 
  //  req.files['avatar'][0] -> File 
  //  req.files['gallery'] -> Array 
  // 
  // req.body will contain the text fields, if there were any 
  
});

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("file upload listening at", addr.address + ":" + addr.port);
});