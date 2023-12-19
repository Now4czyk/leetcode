import { Nullable } from "shared/utilities/nullable.js";

export class TreeNode {
  val: number;
  left: Nullable<TreeNode>;
  right: Nullable<TreeNode>;

  constructor(val?: number, left?: Nullable<TreeNode>, right?: Nullable<TreeNode>) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export module TreeNode {
  export const node = (arr: [number, ...Nullable<number>[]]): TreeNode => {
    const root = new TreeNode(arr.shift()!);
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node !== null && node !== undefined) {
        const left = arr.shift();
        if (left !== null && left !== undefined) {
          node.left = new TreeNode(left!);
          queue.push(node.left);
        }

        const right = arr.shift();
        if (right !== null && right !== undefined) {
          node.right = new TreeNode(right!);
          queue.push(node.right);
        }
      }
    }
    return root;
  };
}
