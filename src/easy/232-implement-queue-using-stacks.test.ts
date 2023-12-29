class MyQueue {
  first: number[];
  last: number[];

  constructor() {
    this.first = [];
    this.last = [];
  }

  push(value: number): void {
    const length = this.first.length;

    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop()!);
    }
    this.last.push(value);
  }

  pop(): number {
    const length = this.last.length;

    if (this.last.length === 0) {
      return this.first.pop()!;
    }

    for (let i = 0; i < length - 1; i++) {
      this.first.push(this.last.pop()!);
    }

    return this.last.pop()!;
  }

  peek(): number {
    const length = this.last.length;

    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop()!);
    }

    return this.first[this.first.length - 1];
  }

  empty(): boolean {
    return this.first.length === 0 && this.last.length === 0;
  }
}

describe("232. Implement Queue using Stacks", () => {
  it("Test 1", () => {
    const myQueue = new MyQueue();
    myQueue.push(1);
    myQueue.push(2);
    expect(myQueue.peek()).toEqual(1);
    expect(myQueue.pop()).toEqual(1);
    expect(myQueue.empty()).toEqual(false);
  });
});
