# nodejs-delete-tweets
If you want delete your tweets in bulk, this utility is for you. Put them on a file and done!

## Get your tweets id
Put in tweets.txt all id of tweets you want delete. You can find them from the url of each tweet
```
https://twitter.com/<your twitter account>/status/XXXXXXXXXXXXXX
```
or your can request your twitter data from Twitter [here](https://twitter.com/settings/your_twitter_data), like I done, and when you receive an email, download your file and extract of data/tweet.js your tweetid
```
451592404445843457
681689914392600577
635824118722633729
635822422873255937
```
## Environment Variables
Get your Twitter API v2 credentials from [here](https://developer.twitter.com/en/apply-for-access) and create a .env file with theses environment variables:
- CUSTOMER_KEY
- CUSTOMER_SECRET
- ACCESS_TOKEN_KEY
- ACCESS_TOKEN_SECRET

### Installing
```
npm install
npm start
```