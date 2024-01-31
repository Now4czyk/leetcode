const brackets: Record<string, string> = {
  "]": "[",
  "}": "{",
  ")": "(",
};

const isClosing = (s: string): boolean => brackets.hasOwnProperty(s);

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (isClosing(char)) {
      const opening = stack.pop();

      if (brackets[char] !== opening) return false;
    } else stack.push(char);
  }
  return !stack.length;
}

describe("20. Valid Parentheses", () => {
  it("Test 1", () => {
    expect(isValid("()")).toEqual(true);
  });
  it("Test 2", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });
  it("Test 3", () => {
    expect(isValid("(]")).toEqual(false);
  });
});
