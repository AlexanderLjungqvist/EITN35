/**
 * Created by alexanderljungqvist on 2016-11-17.
 */
var request = require("request"),
    cheerio = require("cheerio");
url = "http://www.reddit.com";
urlRes = [];
var contactList = [];

exports.fetch = function() {
    request(url, function (error, response, body) {
        //noinspection JSAnnotator
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            $('a.title', '#siteTable').each(function () {
                var urlCatch = $(this).attr('href');
                urlRes.push(urlCatch);
                contactList = urlRes;
            });
            console.log(contactList);
            return (contactList);
        } else {
            console.log("We’ve encountered an error: " + error);
        }
    });
}