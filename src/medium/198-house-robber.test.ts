const rob = (nums: number[]): number => {
  let n = nums.length;
  let state = new Array(n).fill(-1);
  //if there is only one house im just robbing that
  state[n - 1] = nums[n - 1];
  //if there are only 2 houses I would rob the one which gives me max
  state[n - 2] = Math.max(nums[n - 1], nums[n - 2]);
  for (let i = n - 3; i >= 0; i--) state[i] = Math.max(nums[i] + state[i + 2], state[i + 1]);
  return state[0];
};

describe("198. House Robber", () => {
  it("Test 1", () => {
    expect(rob([1, 2, 3, 1])).toEqual(4);
  });
  it("Test 2", () => {
    expect(rob([2, 7, 9, 3, 1])).toEqual(12);
  });
});
