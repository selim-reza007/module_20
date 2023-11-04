import { NextResponse } from "next/server";
import { VerifyToken } from "./app/utility/JWTHelper";

export default async function Middleware(req) {
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        // console.log("Hey, middleware now is in action!");
        try {
            let token = req.cookies.get('token');
            const payload = await VerifyToken(token['value']);
            const requestHeaders = new Headers(req.headers);
            requestHeaders.set('email', payload['email']);
            requestHeaders.set('id', payload['id']);

            return NextResponse.next({ request: { headers: requestHeaders } });
        }
        catch (error) {
            // const requestHeaders = new Headers(req.headers);
            // requestHeaders.set('email', "0");
            // requestHeaders.set('id', "0");
            // return NextResponse.next({ request: { headers: requestHeaders } });
            //this code will be used for header reset
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
}