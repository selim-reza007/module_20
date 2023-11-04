import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        let result = await prisma.blog.findMany();
        return NextResponse.json({ status: "Success", msg: result });
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}

export async function POST(req) {
    try {
        let reqData = await req.json();
        let result = await prisma.blog.create({
            data: reqData
        });
        return NextResponse.json({ status: "Success", msg: "New Blog added" });
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}