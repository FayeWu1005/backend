const path = require("path");
const express = require("express");
const app = express();
const createErrors = require("http-errors");
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 3001;

const twitterRoute = require("./routes/TwitterAPI");
const newsRoute = require("./routes/NewsAPI");
const analysisRoute = require("./routes/AnalysisAPI");

// ********************************************************************
// comment out for final deploy
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// ********************************************************************

app.listen(PORT, () => console.log(`Backend run in http://localhost:${PORT}`));

app.get("/", (req, res) => {
  res.send({ message: "Backend works 🎉" });
});

app.use("/twitter", twitterRoute);
app.use("/news", newsRoute);
app.use("/analysis", analysisRoute);

app.use((req, res, next) => {
  next(createErrors.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});
