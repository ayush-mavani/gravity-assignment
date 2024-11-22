function length(nums) {
  if (nums.length === 0) return 0;

  const arr = new Array(nums.length).fill(1);
  let maxLength = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && arr[i] < arr[j] + 1) {
        arr[i] = arr[j] + 1;
      }
    }

    if (arr[i] > maxLength) {
      maxLength = arr[i];
    }
  }

  return maxLength;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(length(nums));
