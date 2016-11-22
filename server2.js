/**
 * Created by alexanderljungqvist on 2016-11-22.
 */
var express = require('express');
var app = express();
var fetch = require('./server/controllers/fetch');
var contactList = [];

app.use(express.static(__dirname + '/public'));
app.get('/contactList', function(req, res){
    contactList = fetch.fetch();
    res.json(contactList);
});
app.listen(3000);
console.log("server running on port 3000");
