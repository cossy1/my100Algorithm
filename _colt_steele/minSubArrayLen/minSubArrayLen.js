function minSubArrayLen (nums, sum) {
  if(!nums.length) return 0;
  let total = 0;
  let start = 1;
  let end = 1;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++
    } else if( total >= sum ) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1,2,50,3,4,5,6,10, 80], 100));