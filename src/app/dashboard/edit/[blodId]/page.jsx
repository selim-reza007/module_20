import EditBlogComponent from "@/components/client/EditBlogCom";
import { EditBlogData } from "@/app/utility/blogUtility";

export default async function EditBlog({ params }) {
    let blogId = parseInt(params['blodId']);
    let pData = await EditBlogData(blogId);
    let data = pData['msg'];
    return (
        <div>
            This is blog edit page!
            <EditBlogComponent data={data} bid={blogId} />
        </div>
    )
}