const reverseString = (s: string[]): void => {
  let temp = "";
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
  //alternatively using js s.reverse() is enough
};

describe("344. Reverse string", () => {
  it("Test 1", () => {
    let str = ["h", "e", "l", "l", "o"];
    reverseString(str);
    expect(str).toEqual(["o", "l", "l", "e", "h"]);
  });
  it("Test 2", () => {
    let str = ["H", "a", "n", "n", "a", "h"];
    reverseString(str);
    expect(str).toEqual(["h", "a", "n", "n", "a", "H"]);
  });
});
