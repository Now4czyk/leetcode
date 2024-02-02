const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  let index1 = m - 1;
  let index2 = n - 1;
  let mergedIndex = m + n - 1;

  // Compare and store at mergedIndex in nums1
  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[mergedIndex] = nums1[index1];
      index1--;
    } else {
      nums1[mergedIndex] = nums2[index2];
      index2--;
    }
    mergedIndex--;
  }

  // Case where index2.length > index1.length
  // Add remaining elements into nums1
  while (index2 >= 0) {
    nums1[mergedIndex] = nums2[index2];
    index2--;
    mergedIndex--;
  }
};

describe("88. Merge Sorted Array", () => {
  it("Test 1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
  it("Test 2", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });
  it("Test 3", () => {
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });
});
