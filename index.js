const fs = require('fs');
const Twitter = require('twitter');

require('dotenv').config();
const tweetsFile = 'tweets.txt';

const client = new Twitter({
  consumer_key: process.env.CUSTOMER_KEY,
  consumer_secret: process.env.CUSTOMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const lsTweetId = getTweetsId();

lsTweetId.forEach(item => deleteTweet(item));

function getTweetsId () {
  try {
    const data = fs.readFileSync(tweetsFile);
    const lines = data.toString().split(/\r?\n/);
    return lines;    
  } catch (err) {
    console.log('error:', err.message);
    return [];
  }  
}

function deleteTweet(tweetId) {  
  client.post(`statuses/destroy/${tweetId}`, function(err, data, response){ 
    if(err){
      console.log(err);
    } else {        
      console.log(`TweetId ${tweetId} deleted`);  
    }  
  });
}
