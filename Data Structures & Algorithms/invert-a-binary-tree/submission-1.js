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
     * @return {TreeNode}
     */
    invertTree(root) {

        function swap(node){
            if(node == null){
                return;
            }

            const copy = node.left;
            node.left = node.right;
            node.right = copy;

            swap(node.left);
            swap(node.right);
        }

        swap(root); 
        return root;
    }
}
