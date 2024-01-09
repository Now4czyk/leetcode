import { Nullable } from "../utilities/nullable.js";

export class ListNode {
  val: number;
  next: Nullable<ListNode>;

  constructor(val?: number, next?: Nullable<ListNode>) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export namespace ListNode {
  export const node = (numbers: number[]): Nullable<ListNode> => {
    let head: Nullable<ListNode> = null;
    let tail: Nullable<ListNode> = null;
    for (let n of numbers) {
      const node = new ListNode(n);
      if (head === null) {
        head = node;
      } else {
        tail!.next = node;
      }
      tail = node;
    }
    return head;
  };

  export const array = (node: Nullable<ListNode>): number[] => {
    const result: number[] = [];

    while (node) {
      result.push(node.val);
      node = node.next;
    }

    return result;
  };
}
