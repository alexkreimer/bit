var request = require('request'),
    fs = require('fs'),
    xpath = require('xpath'),
    dom = require('xmldom').DOMParser;


    
// request.get('https://api.binance.com/api/v1/exchangeInfo', function (error, response, body) {
//     console.log('error:', error);
//     console.log('statusCode:', response && response.statusCode);
//     payload = JSON.parse(body);
//     fs.writeFile('info.json', JSON.stringify(payload, null, 4));
// });

fs.readFile('./info.json', (err, data) => {
    if (err)
	throw err;

    var doc = new dom().parseFromString(data);
    var result = xpath.evaluate('', doc, null, xpath.XPathResult.ANY_TYPE, null);

    node = result.iterateNext();
    while (node) {
	console.log(node.localName + ': ' + node.firstChild.data);

	node = result.iterateNext();
    }
});

request.get('https://api.binance.com/api/v3/ticker/price?symbol=LTCBTC', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
