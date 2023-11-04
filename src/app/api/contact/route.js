import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const data = await prisma.contact.findMany();
        return NextResponse.json({ status: "Success", msg: data });
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}

export async function POST() {
    try {
        let result = await prisma.contact.create({
            data: {
                email: "selim@gmail.com",
                location: "West Kazipara, Mirpur, Dhaka",
                number: "+8801623-167740"
            }
        })
        return NextResponse.json({ status: "Success", msg: result });
    } catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}