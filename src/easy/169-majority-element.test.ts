const majorityElement = (nums: number[]): number => {
  nums = nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

describe("169. Majority Element\n", () => {
  it("Test 1", () => {
    expect(majorityElement([3, 2, 3])).toEqual(3);
  });

  it("Test 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  });
});
