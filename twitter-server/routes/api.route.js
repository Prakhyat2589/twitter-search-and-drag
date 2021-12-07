const router = require("express").Router();
const { TwitterApi } = require("twitter-api-v2");

const userClient = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_API_KEY,
  appSecret: process.env.TWITTER_CONSUMER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

// To get reecnt trending tweets...
router.get("/recent", async (req, res, next) => {
  try {
    const recentTrends = await userClient.v2.get("tweets/search/recent", {
      query: "Facebook",
      max_results: 10,
    });
    res.send(recentTrends.data);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

//To get seacrhed tweets
router.get("/searchtweets", async (req, res, next) => {
  try {
    const filters = req.query;
    const searchTrends = await userClient.v2.get("tweets/search/recent", {
      query: filters.query,
      max_results: 10,
    });
    res.send(searchTrends.data);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

module.exports = router;
