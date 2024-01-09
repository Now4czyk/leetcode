const romanMap: Record<string, number> = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const romanToInt = (s: string): number => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanMap[s.slice(i, i + 2)]) {
      result += romanMap[s.slice(i, i + 2)];
      i++;
    } else {
      result += romanMap[s[i]];
    }
    // Solution with only I, B, X, L, C, D, M
    // if (romanMap[s[i + 1]] > romanMap[s[i]]) {
    //     result = result + romanMap[s[i + 1]] - romanMap[s[i]]
    //     i++;
    // } else {
    //     result += romanMap[s[i]];
    // }
  }
  return result;
};

describe("13. Roman to Integer\n", () => {
  it("Test 1", () => {
    expect(romanToInt("III")).toEqual(3);
  });

  it("Test 2", () => {
    expect(romanToInt("LVIII")).toEqual(58);
  });

  it("Test 3", () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });
});
