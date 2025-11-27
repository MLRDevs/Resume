// Alex Miller
// component for sorting algorithms

'use client'

import { useState } from "react";
import { BS, SS, MG, QS } from "./SortAlgos";

const Sorts = () => {

    const [arr, setArr] = useState<number[]>([5,2,9,1,6,3,8,4,7]);
    const [status, setStatus] = useState<string[]>(Array(arr.length).fill('default'));
    const [disabled, setDisabled] = useState(false);



    return (
        <div className="py-10 flex flex-col items-center md:flex-row">

            {/* container holding keys and array */}
            <div className="flex flex-row items-center gap-10">
                
                {/* keys */}
                <div className="font-bold px-5 py-5 text-ice-white text-center">
                    <ul className="flex flex-col gap-2">
                        <li className="bg-red-500 rounded-xl p-1">Unsorted</li>
                        <li className="bg-blue-500 rounded-xl p-1">Selected</li>
                        <li className="bg-yellow-500 rounded-xl p-1">Swapping / Writing</li>
                        <li className="bg-green-500 rounded-xl p-1">Sorted</li>
                        <li className="bg-pink-500 rounded-xl p-1">Top Half</li>
                        <li className="bg-gray-500 rounded-xl p-1">Bottom Half</li>
                        <li className="bg-neon-teal/40 rounded-xl p-1">Pivot</li>
                    </ul>
                </div>

                {/* array */}
                <div className="font-bold text-xl">
                    {arr.map((val,i) => {
                        let color = 'bg-red-500';

                        switch (status[i]) {
                            case 'active': color = 'bg-blue-500'; break;
                            case 'swapped': color = 'bg-yellow-500'; break;
                            case 'sorted': color = 'bg-green-500'; break;
                            case 'top': color = 'bg-pink-500'; break;
                            case 'bottom': color = 'bg-gray-500'; break;
                            case 'pivot': color = 'bg-neon-teal/40'; break;
                        }

                        return (
                            <div
                                key={i}
                                className= {
                                    `${color} text-white flex justify-center pl-5 pr-5
                                     ${i === 0 ? 'rounded-t-xl' : ''}
                                     ${i === 8 ? 'rounded-b-xl' : ''}
                                    `
                                }
                            >
                                {val}
                            </div>
                        )
                    })}
                </div>
            
            </div>

            
            {/* buttons for sorts */}
            <div className="w-full flex flex-col py-10 px-10 gap-y-4 font-bold">
                <button 
                    className={`rounded-xl border-2 border-white text-white py-1 px-1
                        ${disabled ? 'bg-gray-600' : 'bg-gray-900' }    
                    `}
                    onClick={() => {
                        setDisabled(true);
                        BS(arr, setArr, setStatus, () => {
                            setDisabled(false);
                        });
                    }}
                    disabled={disabled}
                >
                    Bubble Sort
                </button>
                <button 
                    className={`rounded-xl border-2 border-white text-white py-1 px-1
                        ${disabled ? 'bg-gray-600' : 'bg-gray-900' }    
                    `}
                    onClick={() => {
                        setDisabled(true);
                        SS(arr, setArr, setStatus, () => {
                            setDisabled(false);
                        });
                    }}
                    disabled={disabled}
                >
                    Selection Sort
                </button>
                <button 
                    className={`rounded-xl border-2 border-white text-white py-1 px-1
                        ${disabled ? 'bg-gray-600' : 'bg-gray-900' }    
                    `}
                    onClick={() => {
                        setDisabled(true);
                        MG(arr, setArr, setStatus, () => {
                            setDisabled(false);
                        })
                    }}
                    disabled={disabled}
                >
                    Merge Sort
                </button>
                <button
                    className={`rounded-xl border-2 border-white text-white py-1 px-1
                        ${disabled ? 'bg-gray-600' : 'bg-gray-900' }    
                    `}
                    onClick={() => {
                        setDisabled(true);
                        QS(arr, setArr, setStatus, () => {
                            setDisabled(false);
                        })
                    }}
                    disabled={disabled}
                >
                    Quick Sort
                </button>
            </div>
        </div>
    )
    
}



export default Sorts;