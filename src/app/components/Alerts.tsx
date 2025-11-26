// Northern Kyber
// custom alerts

'use client';

import React from "react";
import { toast } from "react-toastify";
import { GoPersonAdd } from 'react-icons/go';
import { useState } from "react";

// successfull
const Success = ({ message }: { message:string }) => {
    return (
        <div className="font-bold text-frosted-white text-center">
            {message}
        </div>
    )
}

// errors
const Error = ({ message }: { message:string }) => {
    return (
        <div className="font-bold text-frosted-whtie text-center">
            {message}
        </div>
    )
}

// warning 
const Warning = ({ message }: { message:string }) => {
    return (
        <div className="font-bold text-frosted-white text-center">
            {message}
        </div>
    )
}

// confirmation
const Confirm = ({ message, onConfirm, onCancel }: { message:string, onConfirm: () => void, onCancel: () => void }) => {
    return (
        <div className="flex flex-col gap-y-2">
            <p>{message}</p>
            <div className="flex flex-row gap-x-2">
                <button
                    onClick={onConfirm}
                    className="text-sm p-1 bg-green-600 hover:bg-green-700 rounded transition text-frosted-white text-bold"
                >
                    Confirm
                </button>
                <button
                    onClick={onCancel}
                    className="text-sm p-1 bg-gray-600 hover:bg-gray-700 rounded transition text-frosted-white text-bold"
                >   
                    Cancel
                </button>
            </div>
        </div>
    )
}


// successfull
export function SuccessAlert(message:string) {
    toast.success(<Success message={message} />, {
        progressClassName: 'success'
    });
}

// errors
export function ErrorAlert(message:string) {
    toast.error(<Error message={message} />, {
        progressClassName: 'error'
    });
}

// warning
export function WarningAlert(message:string) {
    toast.warning(<Warning message={message} />, {
        progressClassName: 'warning',
    });
}

// confirmation needed
export function ConfirmAlert(msg:string) {

    const confirm = (message:string): Promise<boolean> => {
        return new Promise((resolve) => {
            toast.warning(
                <Confirm
                    message={message}
                    onConfirm={() => {
                        toast.dismiss();
                        resolve(true)
                    }}
                    onCancel={() => {
                        toast.dismiss();
                        resolve(false);
                    }}
                />
            ), {
                progressClassName: 'warning',
            }
        })
    }

    return confirm(msg);
}


