const maxSubArray = (nums: number[]): number => {
  let local = 0;
  let global = -Infinity;
  for (const num of nums) {
    local = Math.max(num, local + num);
    if (local > global) global = local;
  }
  return global;
};

describe("54. Maximum Subarray", () => {
  it("Test 1", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });
  it("Test 2", () => {
    expect(maxSubArray([1])).toEqual(1);
  });
  it("Test 3", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });
});
