const hammingWeight = (n: string): number => {
  let count = 0;
  for (const el of [...Number(n).toString(2)]) el == "1" && count++;
  return count;
};

describe("198. House Robber", () => {});
