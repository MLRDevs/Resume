// Alex Miller
// Sorting algorithms

import { Stardos_Stencil } from "next/font/google";


// Bubble Sort
export const BS = async (
    arr: number[], 
    setArr: (a: number[]) => void,
    setStatus: (s: string[]) => void,
    onFinish: () => void,
) => {

    const array = [...arr];
    const status = Array(arr.length).fill('default');
    const delay = (ms: number) => new Promise(res => setTimeout(res,ms));

    for (let i=0; i < array.length-1; i++) {
        for (let j=0; j < array.length - i - 1; j++) {
            status[j] = 'active';
            status[j+1] = 'active';
            setStatus([...status]);
            await delay(500);

            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                setArr([...array]);
                
                status[j] = 'swapped';
                status[j+1] = 'swapped';
                setStatus([...status]);
                await delay(500);

            }

            status[j] = 'default';
            status[j+1] = 'default';
            setStatus([...status]);
            await delay(500);
        }

        status[array.length - i - 1] = 'sorted';
        setStatus([...status]);
    }

    status.fill('sorted');
    setStatus([...status]);

    await delay(700);
    status.fill('default');
    setStatus([...status]);
    setArr([5,2,9,1,6,3,8,4,7]);

    onFinish();

};


// Selection Sort
export const SS = async (
    arr: number[], 
    setArr: (a: number[]) => void,
    setStatus: (s: string[]) => void,
    onFinish: () => void,
) => {

    const array = [...arr];
    const status = Array(array.length).fill('default');
    const delay = (ms: number) => new Promise(res => setTimeout(res,ms));

    for (let i=0; i < array.length; i++) {
        let min = array[i];
        let minindex = i;

        status[i] = 'active';
        setStatus([...status]);
        await delay(700);

        for (let j=i+1; j < array.length; j++) {
            status[j] = 'active';
            setStatus([...status]);
            await delay(700);

            if (array[j] < min) {
                min = array[j];
                minindex = j;
            }

            status[j] = 'default';
        }

        if (min !== array[i]) {

            status[minindex] = 'swapped';
            status[i] = 'swapped';
            setStatus([...status]);
            await delay(700);

            [array[i], array[minindex]] = [array[minindex], array[i]];
            setArr([...array]);

            status[minindex] = 'default';
        }

        status[i] = 'sorted';
        setStatus([...status]);

        if (min !== array[i]) status[min] = 'default';
        if (status[i] !== 'sorted') status[i] = 'default';
    }

    setStatus(Array(array.length).fill('sorted'));
    await delay(700);

    status.fill('default');
    setStatus([...status]);
    setArr([5,2,9,1,6,3,8,4,7]);

    onFinish();

}

// Merge Sort
export const MG = async (
    arr: number[],
    setArr: (a: number[]) => void,
    setStatus: (s: string[]) => void,
    onFinish: () => void
) => {

    // arrays and delay
    const array = [...arr];
    const status = Array(arr.length).fill('default');
    const delay = (ms: number) => new Promise(res => setTimeout(res,ms));

    // main merge
    const mergeSort = async (start: number, end: number) => {
        if (start >= end) return;

        // split and sort
        const mid = Math.floor((start + end) / 2);
        await mergeSort(start, mid);
        await mergeSort(mid+1, end);
        await merge(start, mid, end);
    }

    // merge and sort two sections
    const merge = async (start: number, mid: number, end: number) => {

        // left and right side
        const left = array.slice(start, mid + 1);
        const right = array.slice(mid + 1, end + 1);

        let i = 0, j = 0, k = start;
        
        // set the status of left and right
        for (let idx = start; idx <= mid; idx++) status[idx] = 'top';
        for (let idx = mid + 1; idx <= end; idx++) status[idx] = 'bottom';
        setStatus([...status]);
        await delay(700);
      
        while (i < left.length && j < right.length) {
            status.fill('default');
            status[k] = 'active';
            setStatus([...status]);
            await delay(700);
      
            if (left[i] <= right[j]) {
                array[k] = left[i];
                i++;
            } else {
                array[k] = right[j];
                j++;
            }
      
            setArr([...array]);
            status[k] = 'swapped';
            setStatus([...status]);
            await delay(700);
            k++;
        }
      
        while (i < left.length) {
            array[k] = left[i];
            setArr([...array]);
            status[k] = 'swapped';
            setStatus([...status]);
            await delay(700);
            i++; k++;
        }
      
        while (j < right.length) {
            array[k] = right[j];
            setArr([...array]);
            status[k] = 'swapped';
            setStatus([...status]);
            await delay(700);
            j++; k++;
        }

        for (let idx = start; idx <= end; idx++) {
            status[idx] = 'sorted';
        }
        setStatus([...status]);
        await delay(700);
    }

    // show everything as sorted
    await mergeSort(0,array.length - 1);
    setStatus(Array(array.length).fill('sorted'));

    // reset everything
    await delay(700);
    status.fill('default');
    setStatus([...status]);
    setArr([5,2,9,1,6,3,8,4,7]);

    onFinish();


}