console.log("Binary search:");
const binarySearch = (arr, start = 0, end = 0, target) => {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
    return binarySearch(arr, start, end, target);
  }
};

const result = binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 2);
console.log(result);
