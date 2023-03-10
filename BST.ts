/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // if (nums.length === 0) return new TreeNode(null, null, null)
    // if (nums.length === 1) return new TreeNode(nums[0], null, null)
    
    function inner(lo, hi){
        if (lo > hi) return null
        if (hi === lo) return new TreeNode(nums[lo], null, null)
        const mid = Math.floor((hi + lo) / 2)
        return new TreeNode(nums[mid], inner(lo, mid-1), inner(mid+1, hi))
    }
    return inner(0, nums.length - 1)
};