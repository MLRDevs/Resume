// Alex Miller
// Node class for Tree component


class TreeNode {

    // node properites
    name: string;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    
    // creating a node
    constructor (n:string, l: TreeNode | null = null, r: TreeNode | null = null) {
        this.name = n;
        this.left = l;
        this.right = r;
    }
}

export default TreeNode;


