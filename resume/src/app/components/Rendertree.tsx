// Alex Miller
// Component for rendering the whole tree one node at a time

import TreeNode from './Node';
import React from 'react';

interface Props {
    node: TreeNode | null;
    current: string | null;
    visited: string[];
    queued: string[];
}

const RenderTree = ({node, current, visited, queued}: Props) => {
    if (!node) return null;

    const statusClass = current === node.name
        ? 'text-blue-500'
        : visited.includes(node.name)
        ? 'text-green-500'
        : queued.includes(node.name)
        ? 'text-yellow-500'
        : 'text-red-500';

    return (
        <li className="relative text-center text-lg font-bold">
            <div className={`inline-block p-2 rounded-full ${statusClass}`}>{node.name}</div>
            {(node.left || node.right) && (
                <ul className="flex justify-center space-x-6 mt-4">
                    <RenderTree node={node.left} current={current} visited={visited} queued={queued} />
                    <RenderTree node={node.right} current={current} visited={visited} queued={queued} />
                </ul>
            )}
        </li>
    )
}

export default RenderTree;


