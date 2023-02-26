import denominationCount from './../src/coinCount.js';

describe('denominationCount', () => {
  test('should correctly determine the total value of the change to be given', () => {
    const coin = 1; 
    const amount = 20;
    const changeToBeGiven = denominationCount(coin)(amount);
    expect(changeToBeGiven).toEqual(20);

  });
});