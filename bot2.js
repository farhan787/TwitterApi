// If you want to use this file then use make "start": "bot.js" in package.json file

console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config.js');

var T = new Twit(config);

var params = {
 q: 'Salman Khan since:2015',	// here what do you want to search 
 count: 10 
} 

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i=0; i<tweets.length;i++){
  	console.log(tweets[i].text);
  }
  console.log(data);
}