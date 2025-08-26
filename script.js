function divide(arr, n) {
  let result = [];
  let current = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      // Add to current chunk
      current.push(num);
      currentSum += num;
    } else {
      // Start a new chunk
      result.push(current);
      current = [num];
      currentSum = num;
    }
  }

  // Push the last chunk
  if (current.length > 0) {
    result.push(current);
  }

  return result;
}
