const generate = (numRows: number): number[][] => {
  const result = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    result[i] = new Array(i + 1);
    result[i][0] = 1;
    result[i][i] = 1;
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }

  return result;
};

describe("118. Pascal's Triangle", () => {
  it("Test 1", () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
  it("Test 2", () => {
    expect(generate(1)).toEqual([[1]]);
  });
});
