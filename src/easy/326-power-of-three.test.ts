const isPowerOfThree = (n: number): boolean => {
  if (n == 0) return false;
  while (n % 3 == 0) n = n / 3;
  return n == 1;
};

describe("283. Move Zeroes", () => {
  it("Test 1", () => {
    expect(isPowerOfThree(27)).toEqual(true);
  });
  it("Test 2", () => {
    expect(isPowerOfThree(0)).toEqual(false);
  });
  it("Test 3", () => {
    expect(isPowerOfThree(-1)).toEqual(false);
  });
});
