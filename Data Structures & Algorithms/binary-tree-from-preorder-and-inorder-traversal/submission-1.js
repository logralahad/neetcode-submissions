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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        function constructTree(pre, inor){
            if (!pre.length || !inor.length) {
                return null;
            }

            const root = new TreeNode(pre[0])
            const mid = inor.indexOf(pre[0]);
            
            root.left = constructTree(pre.slice(1, mid + 1), inor.slice(0, mid));
            root.right = constructTree(pre.slice(mid + 1), inor.slice(mid + 1));
            return root
        }
        
        return constructTree(preorder, inorder);


        // function getParams(allPreArr, inArr, val){
        //     const idx = inArr.findIndex(it => it === val);
        //     const preIdx = allPreArr.findIndex(it => it === val);

        //     const leftInorder = idx != -1 ? inArr.slice(0, idx) : [];
        //     const rightInorder = idx != -1 ? inArr.slice(idx + 1) : [];
        //     const totalSize = leftInorder.length + rightInorder.length;

        //     const newPre = preIdx === -1 || preIdx + 1 > totalSize ? []
        //         : allPreArr.slice(preIdx + 1, preIdx + totalSize);

        //     return {
        //         preArr: newPre,
        //         leftIn: leftInorder,
        //         rightIn: rightInorder
        //     }
        // }

        // function constructTree(node, preArr, leftIn, rightIn){
        //     if(node === null){
        //         return;
        //     }

        //     node.left = leftIn.length > 0 ? new TreeNode(leftIn[0], null, null) : null;
        //     node.right = rightIn.length > 0 ? new TreeNode(rightIn[0], null, null) : null;

        //     const leftParams = getParams(preArr, leftIn, leftIn[0]);
        //     const rightParams = getParams(preArr, rightIn, rightIn[0]);

        //     constructTree(node.left, leftParams.preArr, leftParams.leftIn, leftParams.rightIn);
        //     constructTree(node.right, rightParams.preArr, rightParams.leftIn, rightParams.rightIn);
        // }

        // const root = new TreeNode(preorder[0], null, null);
        // const rootParams = getParams(preorder, inorder, preorder[0]);

        // constructTree(root, rootParams.preArr, rootParams.leftIn, rootParams.rightIn);
        // return root;
    }
}
