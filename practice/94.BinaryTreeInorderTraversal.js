var inorderTraversal = function(root) {
    const result = [];

    function traverse(node) {
        if (!node) return; 

        traverse(node.left);  
        result.push(node.val);
        traverse(node.right); 
    }

    traverse(root);
    return result;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
// Собираем снизу вверх
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node3, null);
const root = new TreeNode(1, null, node2);
console.log("Результат обхода:", inorderTraversal(root)); 
