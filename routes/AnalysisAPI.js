const express = require("express");
const router = express.Router();
const axios = require("axios");
const newsTitle = require("./NewsAPI");
require("dotenv").config();

router.get("/:text", async (req, res) => {
  const twinword_options = {
    method: "GET",
    url: `https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${req.params.text}`,
    // params: { text: "great value in its price range!" },
    headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
      "X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com",
    },
  };

  axios
    .request(twinword_options)
    .then(function (response) {
      if (newsTitle.length == 0) {
        res.send({ message: "No matching." });
      }
      res.send(response.data);
    })
    .catch(function (error) {
      res.send({ message: error });
    });
});

module.exports = router;
