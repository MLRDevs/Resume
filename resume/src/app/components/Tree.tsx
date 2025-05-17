// Alex Miller
// Tree structure component for Skills page

'use client'

import TreeNode from './Node';
import RenderTree from './Rendertree';
import { BFS, DFSPreOrder, DFSInOrder, DFSPostOrder } from './TreeTraversal';

import { useState, useRef } from 'react';

const Tree = () => {

    const root = new TreeNode("A",
        new TreeNode("B",
            new TreeNode("C",null,null),
            new TreeNode("D",null,null)
        ),
        new TreeNode("E",
            new TreeNode("F",null,null),
            new TreeNode("G",null,null),
        )
    );

    const [current, setCurrent] = useState<string | null>(null);
    const [visited, setVisited] = useState<string[]>([]);
    const [disabled, setDisabled] = useState(false);
    const [queued, setQueued] = useState<string[]>([]);

    const done = useRef(false); // reference for traversals being done



    return (
        <div className="flex flex-col justify-center items-center md:flex-row">

            {/* Key for tree */}
            <div className="font-bold text-center px-5 py-5">
                <ul>
                    <li className="text-red-500">Not Visited</li>
                    <li className="text-blue-500">Current Node</li>
                    <li className="text-yellow-500">In Queue</li>
                    <li className="text-green-500">Visited</li>
                </ul>
            </div>
            
            {/* tree itself */}
            <div className="flex px-10">
                <ul>
                    <RenderTree node={root} current={current} visited={visited} queued={queued} />
                </ul>
            </div>

            {/* buttons for sorting */}
            <div className="flex flex-col px-10 py-10 space-y-2 font-bold w-full md:w-1/3">
                <button 
                    disabled={disabled}
                    className="border-2 border-white bg-gray-900 text-white py-1 px-1"
                    onClick={async () => {
                        setDisabled(true);
                        setVisited([]);
                        await BFS(root, setCurrent, setVisited, setQueued, () => {
                            setVisited([]);
                            setDisabled(false);
                        });
                    }}
                >
                    Breadth-First
                </button>
                <button 
                    disabled={disabled}
                    className="border-2 border-white bg-gray-900 text-white py-1 px-1"
                    onClick={async () => {
                        setDisabled(true);
                        setVisited([]);
                        done.current = false;
                        await DFSPreOrder(root, setCurrent, setVisited, visited, () => {
                            setVisited([]);
                            setDisabled(false);
                        }, done);
                        
                    }}
                >
                    Depth-First pre-order
                </button>
                <button
                    disabled={disabled} 
                    className="border-2 border-white bg-gray-900 text-white py-1 px-1"
                    onClick={async () => {
                        setDisabled(true);
                        setVisited([]);
                        done.current = false;
                        await DFSInOrder(root, setCurrent, setVisited, visited, () => {
                            setVisited([]);
                            setDisabled(false);
                        }, done);
                    }}
                >
                    Depth-First in-order
                </button>
                <button 
                    disabled={disabled}
                    className="border-2 border-white bg-gray-900 text-white py-1 px-1"
                    onClick={async () => {
                        setDisabled(true);
                        setVisited([]);
                        done.current = false;
                        await DFSPostOrder(root, setCurrent, setVisited, visited, () => {
                            setVisited([]);
                            setDisabled(false);
                        }, done);
                    }}
                >
                    Depth-First post-order
                </button>

                {/* visited nodes */}
                <p className="">
                    Order: {visited.join(' -> ')}
                </p>
            </div>
        </div>
    )
}

export default Tree;


