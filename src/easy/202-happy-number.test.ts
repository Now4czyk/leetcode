const isHappy = (n: number): boolean => {
  if (n == 1 || n == 7) return true;
  while (n > 9) {
    let sum = 0;
    for (const num of n.toString()) sum += Number(num) * Number(num);
    if (sum == 1 || sum == 7) return true;
    n = sum;
  }
  return false;
};

describe("202. Happy Number", () => {
  it("Test 1", () => {
    expect(isHappy(19)).toEqual(true);
  });
  it("Test 2", () => {
    expect(isHappy(2)).toEqual(false);
  });
});
