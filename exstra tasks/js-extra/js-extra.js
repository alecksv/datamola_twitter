const array = [-2, 1, 4, -4, 3, 2, -1, -1, -5, -4];

const searchArrMaxSum = (arr) => {
  let maxSum = 0;
  let finishSum = 0;
  for (let num of arr) {
    finishSum += num;
    if (finishSum < num) finishSum = num;
    if (maxSum > finishSum) {
      maxSum = maxSum;
    } else {
      maxSum = finishSum;
    }
  }
  return maxSum;
};
// console.log(searchArrMaxSum(array));

// *********************************************************

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

// console.log(getBenefit(billArr));

// ******************************************** Задание №2  *****   24.03.2022

function add(x, y) {
  return x + y;
}
function mul(x, y) {
  return x * y;
}
function sub(x, y) {
  return x - y;
}
function div(x, y) {
  return x / y;
}
let q = add(1, 2);
console.log(q);
