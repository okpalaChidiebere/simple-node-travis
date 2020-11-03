const express = require("express");
const app = express();

const favoriteFood = process.env.FAVORITE_FOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`My favorite food is ${favoriteFood}`);
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main();

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/health", (req, res, next) => {
  res.status(200).send("Hello!");
});