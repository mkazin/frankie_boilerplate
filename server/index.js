var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static('public'));
var path_to_public = path.join(__dirname, '../client/public');

app.use(express.static(path_to_public));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
