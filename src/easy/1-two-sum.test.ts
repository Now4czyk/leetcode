const twoSum = (nums: number[], target: number): number[] => {
  const complements: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in complements) return [complements[complement], i];
    complements[nums[i]] = i;
  }

  return [-1, -1];
};

describe("1. Two Sum", () => {
  it("Test 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("Test 2", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("Test 3", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
