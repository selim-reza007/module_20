import { EditBlogData } from "@/utility/blogUtility";

export default async function BlogDetails({ params }) {

    let blogId = parseInt(params['blogId']);
    let Data = await EditBlogData(blogId);
    let blogData = Data['msg'];
    return (
        <div>
            <p><span className="font-bold">Category:</span> {blogData['category']}</p>
            <p><span className="font-bold">Blog Title:</span> {blogData['title']} </p>
            <p><span className="font-bold">Details:</span></p>
            <p>{blogData['details']}</p>
            <p><span className="font-bold">Created at:</span> {blogData['createdAt']}</p>
        </div>
    );
}