const rotate = (nums: number[], k: number): void => {
  const rotates = k % nums.length;
  const removed = nums.splice(nums.length - rotates, rotates);
  nums.unshift(...removed);
};

describe("217. Contains duplicate", () => {
  it("Test 1", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    rotate(nums, k);

    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
  it("Test 2", () => {
    const nums = [-1, -100, 3, 99];
    const k = 2;
    rotate(nums, k);

    expect(nums).toEqual([3, 99, -1, -100]);
  });
});
