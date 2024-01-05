const maxProfit = (prices: number[]): number => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  }
  return maxProfit;
};

describe("121. Climb Stairs", () => {
  it("Test 1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  });
  it("Test 2", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});
