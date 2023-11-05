"use client";

import { DeleteBlog } from '@/utility/blogUtility';
import { useRouter } from 'next/navigation';
import { AiOutlineUser, AiOutlineFieldTime } from 'react-icons/ai';

export default function DisplayBlogClient({ title, data }) {

    const router = useRouter();

    const handleDelete = async (id) => {
        let response = await DeleteBlog(id);
        alert(response['msg']);
        router.refresh();
    }

    const handleUpdate = async (id) => {
        router.push(`/dashboard/edit/${id}`);
    }

    return (
        <div className="min-h-screen  border-b-2 my-5">
            <h2 className='text-2xl font-bold my-5'>{title}</h2>
            <div className='max-w-6xl grid grid-cols-3 ml-10 gap-3'>

                {
                    data?.msg?.map((bi, i) => {
                        return (
                            <div key={i} className="w-[330px] h-auto shadow-md my-5 bg-white">
                                {/* individual blog */}
                                <div className="w-full">
                                    {/* image section */}
                                    <img src={bi['image']} />
                                </div>
                                <div className="h-auto flex flex-col px-5 py-6 border">
                                    {/* text section */}
                                    <p>{bi['category']}</p>
                                    <p className='text-xl font-bold py-3'>{bi['title']}</p>
                                    <div className="flex gap-5 items-center">
                                        <div className='flex gap-1 items-center'>
                                            <AiOutlineUser />
                                            <p>{bi['userId']}</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <AiOutlineFieldTime />
                                            <p>{bi['createdAt']}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button onClick={() => handleDelete(bi['id'])} className='px-5 py-2 bg-red-500 rounded-lg'>Delete</button>
                                        <button onClick={() => handleUpdate(bi['id'])} className='px-5 py-2 bg-yellow-400 rounded-lg'>Edit</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}