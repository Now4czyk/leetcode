const countPairs = (nums: number[], target: number): number => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++;
    }
  }
  return count;
};

describe("2824. Count Pairs Whose Sum is Less than Target\n", () => {
  it("Test 1", () => {
    const nums = [-1, 1, 2, 3, 1];
    const target = 2;
    const result = countPairs(nums, target);

    console.log(result);
    expect(result).toEqual(3);
  });

  it("Test 2", () => {
    const nums = [-6, 2, 5, -2, -7, -1, 3];
    const target = -2;
    const result = countPairs(nums, target);

    console.log(result);
    expect(result).toEqual(10);
  });
});
