import { tokenCookie } from "@/app/utility/TokenCookie";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        let result = await req.json();
        const pQuery = await prisma.user.findUnique({ where: result });
        if (!'id' in result) {
            return NextResponse.json({ status: false, msg: "Login fail" })
        } else {
            let cookie = await tokenCookie(pQuery['email'], pQuery['id']);
            return NextResponse.json({ status: true, msg: "Login Success" }, { status: 200, headers: cookie });
        }
    }
    catch (error) {
        return NextResponse.json({ status: "Fail in catch block", msg: error });
    }
}

export async function GET(req, res) {
    cookies().delete('token')
    return NextResponse.json({
        status: true, msg: "Logout success"
    })
}