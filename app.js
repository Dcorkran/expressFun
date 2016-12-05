// let express = require('express');
// let app = express();
// let bodyParser = require('body-parser')

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

let urlSrc = [{
  src:'http://weknowyourdreams.com/images/happy/happy-01.jpg'
}];

app.listen(3000,function(){
  console.log('listening on port 3000');
});

app.get('/url',function(req,res){
  res.json(urlSrc);
});

app.post('/url',function(req,res){
  console.log(req.data);
  console.log(req.body.src);
  let newImg = {};
  newImg.src = req.body.src;
  urlSrc.push(newImg);
  res.json(urlSrc);
});
