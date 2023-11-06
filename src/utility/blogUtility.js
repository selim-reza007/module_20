export async function AddNewBlog(blogObj) {
    // blogObj['userId'] = parseInt(blogObj['userId']);
    let response = await fetch("http://localhost:3000/api/blog", { cache: "no-store", method: "POST", body: JSON.stringify(blogObj) });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}

export async function GetMyBlogData(uid) {
    let response = await fetch("http://localhost:3000/api/blog", { cache: "no-store", method: "PATCH", body: JSON.stringify(uid) });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}

export async function DeleteBlog(id) {
    let response = await fetch("http://localhost:3000/api/blog", {
        method: "DELETE",
        body: JSON.stringify(id)
    });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}

export async function EditBlogData(id) {
    let response = await fetch("http://localhost:3000/api/blog", {
        cache: "no-cache",
        method: "OPTIONS",
        body: JSON.stringify(id)
    });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}

export async function UpdateBlogData(blogObj) {
    let response = await fetch("http://localhost:3000/api/blog", {
        method: "PUT",
        body: JSON.stringify(blogObj)
    });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}

export async function GetAllBlog() {
    let response = await fetch("http://localhost:3000/api/blog", {
        cache: "no-cache"
    });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}