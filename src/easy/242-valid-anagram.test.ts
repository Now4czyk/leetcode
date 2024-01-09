const isAnagram = (s: string, t: string): boolean => {
  const map: Record<string, number> = {};

  for (const char of s) map[char] = map[char] ? map[char] + 1 : 1;

  for (const char of t) {
    if (!map[char]) return false;
    map[char]--;
  }

  return Object.values(map).every((v) => v === 0);
};

describe("242. Valid Anagram", () => {
  it("Test 1", () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true);
  });
  it("Test 2", () => {
    expect(isAnagram("rat", "car")).toEqual(false);
  });
});
