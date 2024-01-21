const generate = (numRows: number): number[][] => {
  if (numRows === 1) return [[1]];
  const arr = [[1], [1, 1]];
  for (let i = 1; i < numRows - 1; i++) {
    const curr = [];
    const prev = arr[i];
    for (let j = 0; j < prev.length + 1; j++) {
      if (j == 0) curr.push(prev[j]);
      else if (j == prev.length) curr.push(prev[j - 1]);
      else curr.push(prev[j - 1] + prev[j]);
    }
    arr.push(curr);
  }
  return arr;
};

describe("118. Pascal's Triangle", () => {
  it("Test 1", () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
  it("Test 2", () => {
    expect(generate(1)).toEqual([[1]]);
  });
});
