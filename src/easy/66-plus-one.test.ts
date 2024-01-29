const plusOne = (digits: number[]): number[] => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

describe("66. Plus One", () => {
  it("Test 1", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("Test 2", () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });
  it("Test 3", () => {
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });
});
