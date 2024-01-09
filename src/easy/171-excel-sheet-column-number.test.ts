const titleToNumber = (columnTitle: string): number => {
  let num = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    num = num * 26 + (columnTitle[i].charCodeAt(0) - 64);
  }
  return num;
};

describe("171. Excel Sheet Column Number", () => {
  it("Test 1", () => {
    expect(titleToNumber("A")).toEqual(1);
  });
  it("Test 2", () => {
    expect(titleToNumber("AB")).toEqual(28);
  });
  it("Test 3", () => {
    expect(titleToNumber("ZY")).toEqual(701);
  });

  it("Test 4", () => {
    expect(titleToNumber("FXSHRXW")).toEqual(2147483647);
  });
});
