export async function AddNewBlog(blogObj) {
    blogObj['userId'] = parseInt(blogObj['userId']);
    let response = await fetch("http://localhost:3000/api/blog", { cache: "no-store", method: "POST", body: JSON.stringify(blogObj) });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}