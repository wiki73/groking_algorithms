const mergeSortedArray = (nums1, nums2, m, n) => {
  let i1 = m - 1;
  let i2 = n - 1;
  let i = m + n - 1;
  while (i1 > 0 | i2 > 0 | i>0) {
    if (nums1[i1] >= nums2[i2]) {
      nums1[i] = nums1[i1];
      i1--;
    } else {
      nums1[i] = nums2[i2];
      i2--;
    }
    i--;
  }
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

console.log(mergeSortedArray(nums1, nums2, 3, 3));
