const containsDuplicate = (nums: number[]): boolean => {
  const numbers: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    if (numbers[nums[i]]) {
      return true;
    }
    numbers[nums[i]] = 1;
  }
  return false;
};

describe("217. Contains duplicate", () => {
  it("Test 1", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  });
  it("Test 2", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });
  it("Test 3", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});
