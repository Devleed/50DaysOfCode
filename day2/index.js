const duplicateZeros = function (nums) {
  return nums.reduce((acc, cur) => {
    if (nums.length === acc.length) return acc;

    acc.push(cur);

    if (cur === 0) acc.push(cur);

    return acc;
  }, []);
};

const merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  return nums1.sort((a, b) => {
    return a - b;
  });
};

const removeElement = function (nums, val) {
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
  }
  return nums.length;
};

const removeDuplicates = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      continue;
    }

    nums[count] = nums[i];
    count++;
  }
  return count;
};
