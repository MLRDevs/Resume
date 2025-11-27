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
        <div className="py-10 flex flex-col items-center">
            
            <div className="flex flex-col items-center md:flex-row">

                <div className="flex flex-col items-center">
                    <div className="flex flex-row items-center">
                        
                        {/* Key for tree */}
                        <div className="font-bold text-ice-white text-center px-5 py-5">
                            <ul className="flex flex-col gap-2">
                                <li className="bg-red-500 rounded-xl p-1">Not Visited</li>
                                <li className="bg-blue-500 rounded-xl p-1">Current Node</li>
                                <li className="bg-yellow-500 rounded-xl p-1">In Queue</li>
                                <li className="bg-green-500 rounded-xl p-1">Visited</li>
                            </ul>
                        </div>
                        
                        {/* tree itself */}
                        <div className="flex px-10">
                            <ul>
                                <RenderTree node={root} current={current} visited={visited} queued={queued} />
                            </ul>
                        </div>
                    </div>
                    
                    <p className="text-ice-white font-bold text-lg">
                        Order: {visited.join(' -> ')}
                    </p>
                </div>

                {/* buttons for sorting */}
                <div className="flex flex-col px-10 py-10 gap-y-4 font-bold w-full">
                    <button 
                        disabled={disabled}
                        className={`rounded-xl border-2 border-white text-white py-1 px-1
                            ${disabled ? 'bg-gray-600' : 'bg-gray-900' }    
                        `}
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
                        className={`rounded-xl border-2 border-white text-white py-1 px-1
                            ${disabled ? 'bg-gray-600' : 'bg-gray-900' }    
                        `}
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
                        className={`rounded-xl border-2 border-white text-white py-1 px-1
                            ${disabled ? 'bg-gray-600' : 'bg-gray-900' }    
                        `}
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
                        className={`rounded-xl border-2 border-white text-white py-1 px-1
                            ${disabled ? 'bg-gray-600' : 'bg-gray-900' }    
                        `}
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
                </div>
            </div>
        </div>
    )
}

export default Tree;


