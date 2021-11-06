function findMaxConsecutiveOnes(nums) {
  const { maxOccurence } = nums.reduce(
    (acc, cur) => {
      if (cur === 1) {
        return {
          maxOccurence:
            acc.occurence + 1 > acc.maxOccurence
              ? acc.occurence + 1
              : acc.maxOccurence,
          occurence: acc.occurence + 1,
        };
      } else {
        return {
          maxOccurence:
            acc.occurence > acc.maxOccurence ? acc.occurence : acc.maxOccurence,
          occurence: 0,
        };
      }
    },
    {
      maxOccurence: 0,
      occurence: 0,
    },
  );

  return maxOccurence;
}

const findNumbers = function (nums) {
  return nums.filter(num => Number(String(num).length) % 2 === 0).length;
};

const sortedSquares = function (nums) {
  return nums.map(num => Math.pow(Math.abs(num), 2)).sort((a, b) => a - b);
};
