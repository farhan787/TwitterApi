// If you want to use this file then use make "start": "bot.js" in package.json file

console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config.js');

var T = new Twit(config);

var tweet = { 
	status: '#Hello tweeting from my laptop' 	// Here what do you want to tweet
};

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if(err){
		console.log("Something went wrong!!");
	}else{
		console.log("It worked...");
	}
}

