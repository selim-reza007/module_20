import { GetAllBlog } from '@/app/utility/blogUtility';
import Link from 'next/link';
import { AiOutlineUser, AiOutlineFieldTime } from 'react-icons/ai';

export default async function DisplayBlog({ title }) {

    let allBlogs = await GetAllBlog();
    let data = allBlogs['msg'];

    return (
        <div className="min-h-screen  border-b-2 my-5">
            <h2 className='text-2xl font-bold my-5'>{title}</h2>
            <div className='max-w-6xl grid grid-cols-3 ml-10 gap-3'>

                {
                    data.map((bi, i) => {
                        return (
                            <Link key={i} href={`/unauthorized/blog/${bi['id']}`}>
                                <div className="w-[330px] h-auto shadow-md my-5 bg-white">
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
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    );
}