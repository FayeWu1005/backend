const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", async (req, res, nex) => {
  const twitter_config = {
    method: "get",
    url: "https://api.twitter.com/1.1/trends/place.json?id=1098081",
    headers: {
      Authorization: "Bearer " + process.env.twitter_Bearer_Token,
    },
  };
  axios(twitter_config)
    .then(function (response) {
      res.send(response.data[0].trends.slice(0, 10));
    })
    .catch(function (error) {
      console.log(error);
      res.send({ message: error.message });
    });
});

module.exports = router;
