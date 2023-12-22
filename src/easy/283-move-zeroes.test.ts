/**
 Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums: number[]): void => {
  let writes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - writes] === 0) {
      nums.splice(i - writes, 1);
      nums.push(0);
      writes++;
    }
  }
};

describe("283. Move Zeroes", () => {
  it("Test 1", () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);

    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });
  it("Test 2", () => {
    const nums = [0];
    moveZeroes(nums);

    expect(nums).toEqual([0]);
  });
});
