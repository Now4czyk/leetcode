const trailingZeroes = (n: number): number => (n < 5 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5)));

describe("172. Factorial Trailing Zeroes", () => {
  it("Test 1", () => {
    expect(trailingZeroes(3)).toEqual(0);
  });
  it("Test 2", () => {
    expect(trailingZeroes(5)).toEqual(1);
  });
  it("Test 3", () => {
    expect(trailingZeroes(30)).toEqual(7);
  });
});
