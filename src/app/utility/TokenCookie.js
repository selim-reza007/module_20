import { createToken } from "./JWTHelper";

export async function tokenCookie(email,id) {
    let token = await createToken(email,id);
    return { 'Set-Cookie': `token=${token};Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict` };
}