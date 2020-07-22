const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  newsapi.v2
    .topHeadlines({
      country: "in",
    })
    .then((response) => {
      //   console.log(response.articles);
      res.render("index", { articles: response.articles });
    });
});

key = require("./config/keys");
const NewsAPI = require("newsapi");
const { response } = require("express");
const newsapi = new NewsAPI(key.Api_Key);

app.listen(port, () => console.log(`Listening to port ${port}`));
