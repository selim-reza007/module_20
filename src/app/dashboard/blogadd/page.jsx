import AddBlogComponent from "@/components/client/addBlogCom";
import { headers } from "next/headers";

async function getHeaders() {
    let headerList = headers();
    let user_id = parseInt(headerList.get('id'));
    return user_id;
}

export default async function AddBlog() {

    let uid = await getHeaders();
    return (
        <div>
            <AddBlogComponent uid={uid} />
        </div>
    );
}