const removeDuplicates = (nums: number[]): number => {
  let temp = [...new Set(nums)];
  nums.length = 0;
  nums.push(...temp);
  return nums.length;
};

describe("26. Remove Duplicates from Sorted Array", () => {
  it("Test 1", () => {
    expect(removeDuplicates([1, 1, 2])).toEqual(2);
  });
  it("Test 2", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  });
});
