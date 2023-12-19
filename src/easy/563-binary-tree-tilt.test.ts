class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findTilt(root: TreeNode | null): number {
  const tilts = [];

  return tilts.reduce;
}

describe("1. Two Sum", () => {
  it("Test 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = findTilt(nums, target);

    expect(result).toEqual([0, 1]);
  });

  it("Test 2", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = findTilt(nums, target);

    expect(result).toEqual([1, 2]);
  });

  it("Test 3", () => {
    const nums = [3, 3];
    const target = 6;
    const result = findTilt(nums, target);

    console.log(result);
    expect(result).toEqual([0, 1]);
  });
});
