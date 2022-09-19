const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const newsTitle = [];
const newsApiKey = process.env.news_api_keys;
// const newsIOApiKey = process.env.newsIOApiKey;

function currentDate() {
  let date = new Date();
  let day = date.getDate() - 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  date = year + "-" + month + "-" + day;
  return date;
}

const yesterday = currentDate();
router.get("/:query", async (req, res) => {
  const news_config = {
    method: "get",
    // url: `https://newsdata.io/api/1/news?apikey=${newsIOApiKey}&language=en&q=${req.params.query}`,
    url: `https://newsapi.org/v2/everything?q=${req.params.query}&from=${yesterday}&sortBy=publishedAt&language=en&pageSize=10&apiKey=${newsApiKey}`,
    headers: {},
  };
  axios(news_config)
    .then(function (response) {
      // res.send(response.data);
      // res.send("The news api query is " + req.params.query);
      res.send(response.data.articles);
      newsTitle.push(response.data.articles);
    })
    .catch(function (error) {
      res.send(error);
    });
});

module.exports = router;
