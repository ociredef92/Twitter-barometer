const Twit = require('twit')

const apikey = ''
const apiSecretKey = ''
const accessToken = ''
const accessTokenSecret = ''

// establish connection with Twitter
var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

function mappingTweets(tweets) {
  const tweetMetrics = {
    text : tweets.map(tweet => tweet.text),
    time : tweets.map(tweet => tweet.created_at),
    language : tweets.map(tweet => tweet.lang),
    retweetCount = tweets.map(tweet => tweet.retweet_count)
  };
  return tweetMetrics
}

async function getTweets() {
    T.get('search/tweets', { q: '#climatechange since:2020-09-15', count: 30 }, function(err, data, response) {
      const tweets = mappingTweets(data.statuses)
      // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
      //.map(tweet => tweet.text)
      //.mappingTweets(tweets)
      //.filter(tweet => tweet.toLowerCase().includes('elon')); // filter tweets containing elon
      console.log(tweets, tweets.length);
      
    })
}

getTweets()
// console.log(tweetsArray)