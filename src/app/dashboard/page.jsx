import { headers } from "next/headers";
import DisplayBlogClient from "../components/client/displayBlogClient";
import { GetMyBlogData } from "../utility/blogUtility";

async function getHeaders() {
    let headerList = headers();
    let user_id = parseInt(headerList.get('id'));
    return user_id;
}

export default async function Dashboard() {

    let uid = await getHeaders();
    let blogData = await GetMyBlogData(uid);

    return (
        <div>
            <p className="text-3xl font-bold">Welcome to Dashboard</p>
            <DisplayBlogClient title={"List of my blogs"} data={blogData} />
        </div>
    );
}