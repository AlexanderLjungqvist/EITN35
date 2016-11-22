var express = require('express');
var app = express();
var request = require("request");
var cheerio = require("cheerio");
url = "http://www.reddit.com";
urlRes = [];
var contactList = [];


app.use(express.static(__dirname + '/public'));
app.get('/contactList', function(req, res){
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            $('a.title', '#siteTable').each(function(){
                var urlCatch = $(this).attr('href');
                urlRes.push(urlCatch);
                contactList = urlRes;
            });
            console.log(urlRes);
        } else {
            console.log("We’ve encountered an error: " + error);
        }
    });
    res.json(contactList);
});
app.listen(3000);
console.log("server running on port 3000");
