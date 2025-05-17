// Alex Miller
// Guestbook component for Skills page

'use client'

import { useEffect, useState } from 'react';

const Guestbook = () => {

    const [users, setUsers] = useState([]);
    const [formdata, setFormdata] = useState({ name: '', email: '', company: ''});

    const fetchUsers = async () => {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Conent-Type' : 'application/json'
            },
            body: JSON.stringify(formdata)
        });
        setFormdata({ name: '', email: '', company: '' });
        fetchUsers();
    };

    return (
        <div className="py-5">

            {/* form to add */}
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-x-2 py-2 items-center justify-center">
                    <label>Name</label>
                    <input 
                        placeholder="First Last" 
                        className="border border-white placeholder:px-1 text-center"
                        type="text"
                        value={formdata.name}
                        required
                        onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                    />
                    
                    <label>Email</label>
                    <input 
                        placeholder="you@example.com" 
                        className="border border-white placeholder:px-1 text-center"
                        type="email"
                        value={formdata.email}
                        required
                        onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                    />
                    <label>Company / Location</label>
                    <input 
                        placeholder="Company X at Y" 
                        className="border border-white placeholder:px-1 text-center"
                        type="text"
                        value={formdata.company}
                        required
                        onChange={(e) => setFormdata({ ...formdata, company: e.target.value })}
                    />

                    <div className="flex items-center justify-center px-2">
                        <button type="submit" className="bg-green-500 text-black text-lg w-25">Add</button>
                    </div>
                </form>
                
            </div>

            {/* table */}
            <div className="flex items-center justify-center py-5">
                <table className="border-collapse border border-gray-300">
                    {/* Table Header */}
                    <thead>
                        <tr>
                            <th className="border-2 border-gray-700 px-4 py-2 bg-gray-900 text-white">Name</th>
                            <th className="border-2 border-gray-700 px-4 py-2 bg-gray-900 text-white">Email</th>
                            <th className="border-2 border-gray-700 px-4 py-2 bg-gray-900 text-white">Company / Location</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {users.map((user: any) => (
                            <tr key={user.id}>
                                <td className="border-2 border-gray-700 px-4 py-2">{user.name}</td>
                                <td className="border-2 border-gray-700 px-4 py-2">{user.email}</td>
                                <td className="border-2 border-gray-700 px-4 py-2">{user.company}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default Guestbook;

