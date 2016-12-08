var express = require('express');
var app = express();
var request = require("request");
var cheerio = require("cheerio");
//url = 'https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2953';
url = 'https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0160';
var urlRes= {
    urlTest: []
};
var nvd = 'https://web.nvd.nist.gov/view/vuln/'

app.use(express.static(__dirname + '/public'));
app.get('/contactList', function(req, res){
    console.log("Searching...");

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
           // $('div.vuln-detail').find('p');
              // $(this).find('dd').find('p.row').each(function(){
                   // var urlCatch = $(this).text();
            var overview = $('div.vuln-detail').find('p').first().text();
            console.log(overview);
            if(overview){
               // urlRes.push(overview);
            }
            var cvss20 =  $('#BodyPlaceHolder_cplPageContent_plcZones_lt_zoneCenter_VulnerabilityDetail_VulnFormView_Vuln2CvssPanel').find('div.row').first().text();
            console.log(cvss20);
            if(!cvss20) {
                cvss20 = "No info";
               // urlRes.push(cvss20);
            }
           var cvss30 =  $('#BodyPlaceHolder_cplPageContent_plcZones_lt_zoneCenter_VulnerabilityDetail_VulnFormView_Vuln3CvssPanel').find('div.row').first().text();
            console.log(cvss30);
            if(!cvss30) {
                cvss30 = "No info";
               // urlRes.push(cvss30);
            }
            urlRes.urlTest.push({
                "overview"  :   overview,
                "cvss20"    :   cvss20,
                "cvss30"    :   cvss30
            });

            console.log(urlRes.urlTest[0].overview);
            contactList = urlRes;
         /*   $('div.cvss-row').find('div.row').each(function () {
                var urlCatch = $('div.cvss-detail').find('div.row').first().text();
                urlRes.push(urlCatch);
                contactList = urlRes;
            });*/
           // console.log(urlCatch);
           // console.log(cvss30);
           // console.log(cvss20);


            //urlRes.push(urlCatch);
           // contactList = urlRes;
             //  });
               // console.log(urlRes);
            res.json(contactList);
        } else {
            console.log("We’ve encountered an error: " + error);
        }

    });

});
app.listen(3000);
console.log("server running on port 3000");
