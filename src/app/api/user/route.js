import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        let result = await prisma.user.findMany();
        return NextResponse.json({ status: "Success", msg: result })
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error })
    }
}

// export async function POST() {
//     try{
//         let result = await prisma.user.create({
//             data: {
//                 name: "Selim Reza",
//                 email: "selim@gmail.com",
//                 number: "01623167740",
//                 password: "demo123"
//             }
//         });
//         return NextResponse.json({status: "Success", msg: result})
//     }
//     catch (error) {
//         return NextResponse.json({status: "Fail", msg: error})
//     }
// }


export async function POST(req) {
    try {
        let userObj = await req.json();
        let result = await prisma.user.create({
            data: userObj
        })
        return NextResponse.json({ status: "Success", msg: "ok stored" })
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error })
    }
}