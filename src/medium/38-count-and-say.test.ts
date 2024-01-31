const getStr = (str: string): string => {
  let amount = 0;
  let curr = "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != curr) {
      if (curr != "") result += `${amount}${curr}`;
      curr = str[i];
      amount = 1;
    } else amount++;
    if (i == str.length - 1) result += `${amount}${curr}`;
  }
  return result;
};

const countAndSay = (n: number): string => {
  let result = "1";
  if (n == 1) return result;

  for (let i = 2; i <= n; i++) result = getStr(result);
  return result;
};

describe("38. Count and Say", () => {
  it("Test 1", () => {
    expect(countAndSay(1)).toEqual("1");
  });
  it("Test 2", () => {
    expect(countAndSay(4)).toEqual("1211");
  });
});
