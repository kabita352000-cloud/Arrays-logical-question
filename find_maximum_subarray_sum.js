let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let maxSum = arr[0];
let currentSum = 0;

for (let i = 0; i < arr.length; i++) {

    currentSum += arr[i];

    if (currentSum > maxSum) {
        maxSum = currentSum;
    }

    if (currentSum < 0) {
        currentSum = 0;
    }
}

console.log(maxSum); // 6