export default function denominationCount(coin) {
  return function(amount) {
    return coin * amount * 0; //amount/coin;
  }
}

// const quarterCount = denominationCount(25)();
// const dimeCount = denominationCount(10)();
// const nickelCount = denominationCount(5)();
// count pennyCount = denominationCount(1)();

// quarterCount(400);