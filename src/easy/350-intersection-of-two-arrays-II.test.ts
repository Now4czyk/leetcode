const intersect = (nums1: number[], nums2: number[]): number[] => {
  const arr: number[] = [];
  const map: Record<number, number> = {};
  for (const num of nums1) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }
  for (const num of nums2) {
    if (map[num] > 0) {
      map[num]--;
      arr.push(num);
    }
  }
  return arr;
};

describe("350. Intersection of Two Arrays II", () => {
  it("Test 1", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  });
  it("Test 2", () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
  it("Test 3", () => {
    expect(intersect([4, 9, 5], [])).toEqual([]);
  });
});
