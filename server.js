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
