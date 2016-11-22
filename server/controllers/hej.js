var request = require("request"),
    cheerio = require("cheerio");
url = "http://www.reddit.com";
urlRes = [];
var contactList = [];

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