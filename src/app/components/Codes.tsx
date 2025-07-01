// Alex Miller
// Code blocks for various files for Skills page

'use client'

import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const files = [
    { title: 'Compute Pi using Threads', filepath: '/code/ComputePi.java', lang: 'java', language: 'Java'},
    { title: 'Sending Email using Sockets', filepath: '/code/Email.cpp', lang: 'cpp', language: 'C++'},
    { title: 'GPA Calculator', filepath: '/code/GPACalculator.py', lang: 'python', language: 'Python'}
]

const Blocks = () => {
    const [codes, setCodes] = useState<{title: string; code: string, lang: string, language: string}[]>([]);

    useEffect(() => {
        Promise.all(
          files.map(async ({ title, filepath, lang, language }) => {
            const res = await fetch(filepath);
            const text = await res.text();
            return { title, code: text, lang, language };
          })
        ).then(setCodes);
      }, []);

    return (
        <div className="flex flex-col md:flex-row m-10">
            {codes.map((snippet, index) => (
                <div key={index} className=" max-w-full md:max-w-1/3 px-1">
                    <div className="bg-gray-900 rounded-2xl text-center">
                        <h1 className="text-xl font-bold mb-2 py-10 md:py-5">{snippet.title}</h1>
                    </div>
                    <p className="text-lg text-gray-500">{snippet.language}</p>
                    <SyntaxHighlighter
                        language={snippet.lang}
                        style={oneDark}
                        showLineNumbers
                        wrapLongLines={true}
                        customStyle={{ 
                            margin: 0, 
                            padding: '1rem', 
                            height: '400px',
                            overflowX: 'auto',
                            wordBreak: 'break-word',
                            whiteSpace: 'pre-wrap'
                        }}
                        className="rounded-md"
                    >
                        {snippet.code}
                    </SyntaxHighlighter>
                    <br></br>
                </div>
            ))}
        </div>
    )
}

export default Blocks;


