// Alex Miller
// Tree Traversal Methods

import TreeNode from './Node';

// Breadth First Search
export const BFS = async (
    root: TreeNode,
    setCurrent: (name: string | null) => void, // current node
    setVisited: (names: string[]) => void, // all nodes visited
    setQueued: (names: string[]) => void, // all nodes in the queue
    onFinish: () => void, // method to run on finish
) => {
    const queue: TreeNode[] = [root]; // queue for nodes
    const visited: string[] = []; // all visited nodes
    setQueued(queue.map(n => n.name)); // all queued nodes
    const delay = (ms: number) => new Promise(res => setTimeout(res,ms)); // delay

    while (queue.length > 0) {
        const node = queue.shift(); // pop from queue
        if (!node) continue;

        setQueued(queue.map(n => n.name));

        setCurrent(node.name); // set the current node
        await delay(400);

        visited.push(node.name); // push the current node to the visited
        setVisited([...visited]); // set the visited nodes
        await delay(300); // delay between blue and green
        

        // do other nodes
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        setQueued(queue.map(n => n.name));
        await delay(300);
    }

    // reset everything
    await delay(600);
    setCurrent(null);
    setQueued([]);
    await delay(500);
    onFinish();
}

export const DFSPreOrder = async (
    node: TreeNode | null,
    setCurrent: (name: string | null) => void,
    setVisited: (name: string[]) => void,
    visited: string[] = [],
    onFinish: () => void,
    done: { current: boolean }
) => {

    if (!node || done.current) return;
    const delay = (ms: number) => new Promise(res => setTimeout(res,ms));

    setCurrent(node.name);
    await delay(400);

    if (!visited.includes(node.name)) {
        visited.push(node.name);
        setVisited([...visited]);
        await delay(400);
    }

    if (node.left) {
        await DFSPreOrder(node.left, setCurrent, setVisited, visited, onFinish, done);

        if (!done.current) {
            setCurrent(node.name);
            await delay(400);
        }
        
    }

    if (node.right) {
        await DFSPreOrder(node.right, setCurrent, setVisited, visited, onFinish, done);

        if (!done.current) {
            setCurrent(node.name);
            await delay(400);
        }
    }

    if (visited.length === 7 && !done.current) {
        done.current = true;
        await delay(600);
        setCurrent(null);
        await delay(300);
        onFinish();
    }
}

export const DFSInOrder = async (
    node: TreeNode | null,
    setCurrent: (name: string | null) => void,
    setVisited: (name: string[]) => void,
    visited: string[] = [],
    onFinish: () => void,
    done: { current: boolean }
) => {

    if (!node || done.current) return;
    const delay = (ms: number) => new Promise(res => setTimeout(res,ms));

    setCurrent(node.name);
    await delay(400);

    if (node.left) {
        await DFSInOrder(node.left, setCurrent, setVisited, visited, onFinish, done);

        if (!done.current) {
            setCurrent(node.name);
            await delay(400);
        }
    }

    if (!visited.includes(node.name)) {
        setCurrent(node.name);
        await delay(400);

        visited.push(node.name);
        setVisited([...visited]);
        await delay(400);
    }
    

    if (node.right) {
        await DFSInOrder(node.right, setCurrent, setVisited, visited, onFinish, done);

        if (!done.current) {
            setCurrent(node.name); // backtrack again
            await delay(400);
        }
    }

    if (visited.length === 7 && !done.current) {
        done.current = true;
        await delay(600);
        setCurrent(null);
        await delay(300);
        onFinish();
    }
}


export const DFSPostOrder = async (
    node: TreeNode | null,
    setCurrent: (name: string | null) => void,
    setVisited: (name: string[]) => void,
    visited: string[] = [],
    onFinish: () => void,
    done: { current: boolean }
) => {

    if (!node || done.current) return;
    const delay = (ms: number) => new Promise(res => setTimeout(res,ms));

    setCurrent(node.name);
    await delay(400);

    if (node.left) {
        await DFSPostOrder(node.left, setCurrent, setVisited, visited, onFinish, done);

        if (!done.current) {
            setCurrent(node.name);
            await delay(400);
        }
    }

    if (node.right) {
        await DFSPostOrder(node.right, setCurrent, setVisited, visited, onFinish, done);

        if (!done.current) {
            setCurrent(node.name);
            await delay(400);
        }
    }

    if (!visited.includes(node.name)) {
        setCurrent(node.name);
        await delay(400);

        visited.push(node.name);
        setVisited([...visited]);
        await delay(300);
    }

    if (visited.length === 7 && !done.current) {
        done.current = true;
        await delay(600);
        setCurrent(null);
        await delay(300);
        onFinish();
    }
}


