// Alex Miller
// Guestbook component for Skills page

'use client'

import { useEffect, useState } from 'react';
import { ErrorAlert } from './Alerts';

const Guestbook = () => {

    const [users, setUsers] = useState<{ name: string; email: string; company: string }[]>([]);
    const [formdata, setFormdata] = useState({ name: '', email: '', company: ''});
    const [errors, setErrors] = useState<{ [key:string]:boolean}>({});

    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            
            if (Array.isArray(data)) {
                setUsers(data);
            }
            else {
                console.error('Expected array but got:', data);
            }
        }
        catch (err) {
            console.error('Failed to get users:', err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // set the errors
        const newErrors: { [key:string]:boolean } = {};

        if (!formdata.email) newErrors.email = true;
        if (!formdata.company) newErrors.company = true;
        if (!formdata.name) newErrors.name = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            ErrorAlert('Must enter all fields');
            return;
        }        


        await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formdata)
        });
        setFormdata({ name: '', email: '', company: '' });
        fetchUsers();
    };

    const inputClass = (field: string) => {
        return `text-icy-blue px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-3 focus:border-none ${errors[field] ? 'border-red-500 ring-red-500' : 'focus-ring-blue-500'}`;
    }

    return (
        <div className="py-5 flex flex-col sm:flex-row gap-10 items-center">

            {/* form to add */}
            <div className="flex flex-col gap-5 items-center">
                <form className="py-10 flex flex-col items-center gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-center gap-5">
                        
                        {/* name */}
                        <div className="flex flex-col items-center gap-2">
                            <label className="text-neon-teal font-bold text-lg">Name</label>
                            <input
                                type="text"
                                value={formdata.name}
                                onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                                placeholder="first last"
                                className={inputClass('name')}
                            />
                        </div>
                        
                        {/* email */}
                        <div className="flex flex-col items-center gap-2">
                            <label className="text-neon-teal font-bold text-lg">Email</label>
                            <input
                                type="text"
                                value={formdata.email}
                                onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                                placeholder="you@example.com"
                                className={inputClass('email')}
                            />
                        </div>

                        {/* company / location */}
                        <div className="flex flex-col items-center gap-2">
                            <label className="text-neon-teal font-bold text-lg">Company / Location </label>
                            <input
                                type="text"
                                value={formdata.company}
                                onChange={(e) => setFormdata({ ...formdata, company: e.target.value })}
                                placeholder="company X at Y"
                                className={inputClass('company')}
                            />
                        </div>
                    </div>

                    {/* submission */}
                    <button
                        type="submit"
                        className="p-1 rounded-xl text-ice-white font-bold bg-green-500 hover:bg-green-600 active:bg-green-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* table */}
            <div className="border border-5 border-gray-900 rounded-xl">
                <div className="m-5 text-ice-white h-50 overflow-y-scroll">

                    {/* table body */}
                    <div className="flex flex-col gap-3 m-5">
                        {users.map((user:any) => (
                            <div key={user.id} className="flex flex-col gap-1 text-center border rounded-xl border-icy-blue">
                                <p className="px-4 py-2 font-bold text-lg text-neon-teal">{user.name}</p>
                                <p className="px-4 py-2">{user.email}</p>
                                <p className="px-4 py-2">{user.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}



export default Guestbook;

