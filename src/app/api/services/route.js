import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        let result = await prisma.services.findMany();

        return NextResponse.json({ status: "Success", msg: result });
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}

export async function POST() {
    try {
        let result = await prisma.services.create({
            data: {
                title: "Desktop App deveopment",
                description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar felis posuere",
                img1: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/187700248/original/84a5b84d9b67ab7392d85af0f22e3cc65d7ee4ed/design-desktop-application-ui-ux.jpg",
                img2: "https://img.freepik.com/premium-vector/ux-ui-design-concept-banner-web-page-presentation-infographics_617090-29.jpg",
                img3: "https://ibyteinfomatics.com/blog/wp-content/uploads/2023/02/Top-6-UIUX-Design-Trends-In-2023.png",
                img4: "https://apacentrepreneur.com/wp-content/uploads/2022/08/UI_UX-Design.jpg"
            }
        })
        return NextResponse.json({ status: "Success", msg: result });
    }
    catch (error) {
        return NextResponse.json({ status: "Fail", msg: error });
    }
}
