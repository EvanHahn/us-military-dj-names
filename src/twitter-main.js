var twit = require('twit');
var env = require('node-env-file');
var randomName = require('./lib/random-name')


env(__dirname +'/.env');

var t = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var name = 'DJ ' + randomName();

t.post('statuses/update', { status: name }, function(err, data, response) {
     console.log('Listening to the musical stylings of', name);
})
