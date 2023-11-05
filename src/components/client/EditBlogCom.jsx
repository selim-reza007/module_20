"use client";

import { UpdateBlogData } from "@/utility/blogUtility";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditBlogComponent({ data, bid }) {

    const router = useRouter();
    const [blog, setBlog] = useState({
        title: data['title'],
        details: data['details'],
        image: data['image'],
        category: data['category'],
        id: bid
    });

    const handleUpdate = async (e) => {
        e.preventDefault();

        let response = await UpdateBlogData(blog);
        alert(response['msg']);

        // router.replace('/dashboard');
        window.location.href = "/dashboard";

    }

    return (
        <div className="w-[1000px] bg-slate-200 rounded-lg mt-5">
            <form className="card-body" onSubmit={e => handleUpdate(e)}>

                <label className="text-xl font-bold text-center">Edit Blog</label>
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
