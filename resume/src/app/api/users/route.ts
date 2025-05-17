// Alex Miller
// route for getting users from MySql table


import { NextResponse } from "next/server";
import prisma from '../../../lib/prismaClient';

// get all of the users
export async function GET() {
    try {
        const users = await prisma.users.findMany();
        return NextResponse.json(users);
    }
    catch(err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

// add a user
export async function POST(req: Request) {
    try {
        const data = await req.json();
        const user = await prisma.users.create({
            data: {
                name: data.name,
                email: data.email,
                company: data.company,
            }
        });
        return NextResponse.json(user);
    }
    catch(err) {
        return NextResponse.json('Failed to create row', { status: 500});
    }
    
}


