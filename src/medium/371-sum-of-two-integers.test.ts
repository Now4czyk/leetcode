const getSum = (a: number, b: number) => {
  while (b != 0) {
    /**
     * To solve this problem, we use bitwise operations
     * and break the problem into two parts.
     *
     * Binary operators used:
     * & (AND) - produces a digit of 1 if both numbers have a digit of 1
     * ^ (XOR) - produces a digit of 1 only if one number (not both) have a digit of one
     * << (Left Shift) - adds one binary zero onto the number; increments operand.
     *
     * Carry - this is the binary number that is 'carried' to the new number. For example: adding 1000 + 1000 would produce 10000 after the bit manipulation is done
     * Addition - this is the actual addition done with the XOR operator. If one 1 exists, the digit is kept. We add this to the carry.
     *
     * This function is looped to add the carry onto the number with XOR addition - as we can't do it easily otherwise - and accounts for edge cases.
     *
     *
     */
    let carry = a & b;
    //a = addition function
    a = a ^ b;
    //incrementing the carry - 1000 in binary becomes 10000
    b = carry << 1;
  }
  return a;
};

describe("371. Sum of Two Integers\n", () => {
  it("Test 1", () => {
    expect(getSum(1, 2)).toEqual(3);
  });
  it("Test 2", () => {
    expect(getSum(-2, 3)).toEqual(1);
  });
});
