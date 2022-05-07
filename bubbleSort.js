const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length - i - 1; j++) {
      console.log(arr[i], arr[j]);
      if (arr[j] > arr[j + 1]) {
        console.log("yes..");
        arr[j], (arr[j + 1] = arr[j + 1]), arr[j];
      }
    }
  }
};
const arr = [1, 5, 4, 3, 2, 9];
bubbleSort(arr);
console.log(arr);
