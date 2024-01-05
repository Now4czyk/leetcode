const climbDynamicProgramming = () => {
  const steps: Record<number, number> = { 0: 0, 1: 1, 2: 2 };
  return function (n: number) {
    if (n < 3) {
      return steps[n];
    }
    for (let i = 2; i < n; i++) {
      steps[i + 1] = steps[i] + steps[i - 1];
    }
    return steps[n];
  };
};

const climbStairs = (n: number): number => {
  if (n <= 3) {
    return n;
  }
  const steps = [1, 2, 3];
  for (let i = 2; i < n; i++) {
    steps.push(steps[i] + steps[i - 1]);
  }
  return steps[n - 1];
};

describe("70. Climb Stairs", () => {
  it("Test 1", () => {
    expect(climbStairs(2)).toEqual(2);
  });
  it("Test 2", () => {
    expect(climbStairs(4)).toEqual(5);
  });
});
