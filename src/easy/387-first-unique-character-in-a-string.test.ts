const firstUniqChar = (s: string): number => {
  let m = new Array<number>(26).fill(0);
  let shift: number = "a".charCodeAt(0);
  for (let i: number = 0; i < s.length; i++) m[s.charCodeAt(i) - shift]++;
  for (let i: number = 0; i < s.length; i++) if (m[s.charCodeAt(i) - shift] == 1) return i;
  return -1;
};

describe("387. First Unique Character in a String", () => {
  it("Test 1", () => {
    expect(firstUniqChar("leetcode")).toEqual(0);
  });
  it("Test 2", () => {
    expect(firstUniqChar("loveleetcode")).toEqual(2);
  });
  it("Test 3", () => {
    expect(firstUniqChar("aabb")).toEqual(-1);
  });
});
