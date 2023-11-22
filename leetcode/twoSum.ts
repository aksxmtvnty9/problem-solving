// For details, visit: https://leetcode.com/submissions/detail/1066717344/

// Runtime: 119 ms
// Memory Usage: 43.1 MB
// Tries: 5 for acceptance & 8 for best solution

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            // add prev and present number
            const sum = nums[i] + nums[j];

            if (sum === target && i !== j) {
                return [i, j]
            }
        }
    }
};
