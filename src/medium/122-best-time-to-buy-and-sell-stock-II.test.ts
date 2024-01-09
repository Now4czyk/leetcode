const maxProfit = (prices: number[]): number => {
  let profit = 0;
  let minPrice = prices[0];
  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    if (price > minPrice) {
      profit += price - minPrice;
      minPrice = price;
    }
  }
  return profit;
};

describe("122. Best Time To Buy And Sell Stock II", () => {
  it("Test 1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
  });
  it("Test 2", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
  });
  it("Test 3", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});
