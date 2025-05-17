// Alex Miller
// component for sorting algorithms

'use client'

import { useState } from "react";
import { BS, SS, MG } from "./SortAlgos";

const Sorts = () => {

    const [arr, setArr] = useState<number[]>([5,2,9,1,6,3,8,4,7]);
    const [status, setStatus] = useState<string[]>(Array(arr.length).fill('default'));
    const [disabled, setDisabled] = useState(false);



    return (
        <div className="flex flex-col justify-center items-center md:flex-row">

            {/* container holding keys and array for mobile */}
            <div className="flex flex-row w-full gap-x-10 md:w-1/3">
                
                {/* keys */}
                <div className="font-bold px-5 py-5 text-center">
                    <ul>
                        <li className="text-red-500">Unsorted</li>
                        <li className="text-blue-500">Selected</li>
                        <li className="text-yellow-500">Swapping / Writing</li>
                        <li className="text-green-500">Sorted</li>
                        <li className="text-pink-500">Top Half</li>
                        <li className="text-gray-500">Bottom Half</li>
                    </ul>
                </div>

                {/* array */}
                <div className="font-bold w-1/3 md:w-1/3 text-xl">
                    {arr.map((val,i) => {
                        let color = 'bg-red-500';

                        switch (status[i]) {
                            case 'active': color = 'bg-blue-500'; break;
                            case 'swapped': color = 'bg-yellow-500'; break;
                            case 'sorted': color = 'bg-green-500'; break;
                            case 'top': color = 'bg-pink-500'; break;
                            case 'bottom': color = 'bg-gray-500'; break;
                        }

                        return (
                            <div
                                key={i}
                                className= {
                                    `${color} text-white flex justify-center`
                                }
                            >
                                {val}
                            </div>
                        )
                    })}
                </div>
            
            </div>

            
            {/* buttons for sorts */}
            <div className="flex flex-col py-10 px-10 space-y-2 font-bold w-full md:w-1/3">
                <button 
                    className="border-2 border-white bg-gray-900 text-white py-1 px-1"
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
                    className="border-2 border-white bg-gray-900 text-white py-1 px-1"
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
                    className="border-2 border-white bg-gray-900 text-white py-1 px-1"
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
            </div>
        </div>
    )
    
}



export default Sorts;