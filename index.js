if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
console.log(process.env);
const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${3000}`);
});

const api_key = process.env.apikey;

app.get("/dinoname", async (request, response) => {
  const fetchapi = await fetch(
    "https://dinoipsum.com/api/?format=json&words=2&paragraphs=1",
    {
      method: "GET",
    }
  );
  const dinoNameResponse = await fetchapi.json();
  console.log(dinoNameResponse);
  response.json(dinoNameResponse);
});

app.get("/dinoimage", async (request, response) => {
  const fetchapi = await fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=happycat&count=100",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
      },
    }
  );
  const dinoImageResponse = await fetchapi.json();
  console.log(dinoImageResponse);
  response.json(dinoImageResponse);
});
