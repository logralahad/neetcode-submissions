/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        function exploreTree(node, max){
            if(node === null){
                return 0;
            }

            let res = node.val >= max ? 1 : 0;
            const newMax = Math.max(max, node.val);

            res += exploreTree(node.left, newMax);
            res += exploreTree(node.right, newMax);
            return res;
        }

        return exploreTree(root, root.val); 
    }
}
