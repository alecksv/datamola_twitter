const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const searchArrMaxSum = (arr) => {
  let maxSum = 0;
  let finishSum = 0;
  for (let num of arr) {
    finishSum += num;
    if (finishSum < 0) finishSum = 0;
    if (maxSum > finishSum) {
      maxSum = maxSum;
    } else {
      maxSum = finishSum;
    }
  }
  return maxSum;
};
console.log(searchArrMaxSum(array));

const billArr = [7, 1, 5, 3, 6, 4];

const getBenefit = (arr) => {
  let benefit = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      benefit += arr[i + 1] - arr[i];
    }
  }

  return benefit;
};

console.log(getBenefit(billArr));
