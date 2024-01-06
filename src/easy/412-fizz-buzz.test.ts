const fizzBuzz = (n: number): string[] => {
  const arr = Array(n);
  for (let i = 1; i <= n; i++) {
    if (!(i % 15)) {
      arr[i - 1] = "FizzBuzz";
    } else if (!(i % 5)) {
      arr[i - 1] = "Buzz";
    } else if (!(i % 3)) {
      arr[i - 1] = "Fizz";
    } else {
      arr[i - 1] = i.toString();
    }
  }
  return arr;
};

describe("412. Fizz Buzz", () => {
  it("Test 1", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
  });

  it("Test 2", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("Test 3", () => {
    expect(fizzBuzz(15)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });
});
