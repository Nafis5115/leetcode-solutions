function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] as number) + (nums[j] as number) === target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log(twoSum([2, 11, 7, 15], 9));
