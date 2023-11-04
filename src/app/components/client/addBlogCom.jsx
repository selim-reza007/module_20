"use client";

import { AddNewBlog } from "@/app/utility/blogUtility";
import { useState } from "react";

export default function AddBlogComponent({ uid }) {

    const [blog, setBlog] = useState({
        title: "",
        details: "",
        image: "",
        category: "",
        userId: uid['value']
    });

    const handleSave = async (e) => {
        e.preventDefault();
        // console.log(blog['userId']['value']);
        let result = await AddNewBlog(blog);
        console.log(result['msg']);
    }

    return (
        <div className="w-[1000px] bg-slate-200 rounded-lg mt-5">
            <form className="card-body" onSubmit={e => handleSave(e)}>

                <label className="text-xl font-bold text-center">Add new Blog</label>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input onChange={e => setBlog({ ...blog, title: e.target.value })} value={blog['title']} type="text" placeholder="Title" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea onChange={e => setBlog({ ...blog, details: e.target.value })} value={blog['details']} type="text" placeholder="Details" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Imgae cdn link</span>
                    </label>
                    <input onChange={e => setBlog({ ...blog, image: e.target.value })} value={blog['image']} type="text" placeholder="Imgae cdn link" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input onChange={e => setBlog({ ...blog, category: e.target.value })} value={blog['category']} type="text" placeholder="Category Name" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    );
}