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

export async function PATCH(req) {
    try {
        let userId = await req.json();
        let result = await prisma.blog.findMany({
            where: { userId: userId }
        });
        return NextResponse.json({ status: "Success", msg: result });
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: "Not ok" });
    }
}

export async function DELETE(req) {
    try {
        const bid = await req.json();
        let result = await prisma.blog.delete({
            where: { id: bid }
        })
        return NextResponse.json({ status: "Success", msg: "Blog deleted" })
    } catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}

export async function OPTIONS(req) {
    try {
        const bid = await req.json();
        let result = await prisma.blog.findUnique({
            where: { id: bid }
        })
        return NextResponse.json({ status: "Success", msg: result });
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}

export async function PUT(req) {
    try {
        let reqData = await req.json();
        const title = reqData['title'];
        const details = reqData['details'];
        const image = reqData['image'];
        const category = reqData['category'];
        let result = await prisma.blog.update({
            where: { id: reqData['id'] },
            data: {
                title: title,
                details: details,
                image: image,
                category: category
            }
        })
        return NextResponse.json({ status: "Success", msg: "Data Updated" });
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}