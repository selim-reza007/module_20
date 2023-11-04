import { AiOutlineUser, AiOutlineFieldTime } from 'react-icons/ai';

export default function DisplayBlog({title}) {

    return (
        <div className="min-h-screen border-b-2 my-5">
            <h2 className='text-2xl font-bold my-5'>{title}</h2>
            <div className='max-w-6xl grid grid-cols-3 ml-10'>

                <div className="w-[330px] h-auto shadow-md my-5">
                    {/* individual blog */}
                    <div className="w-full">
                        {/* image section */}
                        <img src="blog/blog-1.jpg" />
                    </div>
                    <div className="h-auto flex flex-col px-5 py-6 border">
                        {/* text section */}
                        <p>Mobile</p>
                        <p className='text-xl font-bold py-3'>Imformation of the mobile that will be displayed</p>
                        <div className="flex gap-5 items-center">
                            <div className='flex gap-1 items-center'>
                                <AiOutlineUser />
                                <p>Author Name</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <AiOutlineFieldTime />
                                <p> Date</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[330px] h-auto shadow-md my-5">
                    {/* individual blog */}
                    <div className="w-full">
                        {/* image section */}
                        <img src="blog/blog-1.jpg" />
                    </div>
                    <div className="h-auto flex flex-col px-5 py-6 border">
                        {/* text section */}
                        <p>Mobile</p>
                        <p className='text-xl font-bold py-3'>Imformation of the mobile that will be displayed</p>
                        <div className="flex gap-5 items-center">
                            <div className='flex gap-1 items-center'>
                                <AiOutlineUser />
                                <p>Author Name</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <AiOutlineFieldTime />
                                <p> Date</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[330px] h-auto shadow-md my-5">
                    {/* individual blog */}
                    <div className="w-full">
                        {/* image section */}
                        <img src="blog/blog-1.jpg" />
                    </div>
                    <div className="h-auto flex flex-col px-5 py-6 border">
                        {/* text section */}
                        <p>Mobile</p>
                        <p className='text-xl font-bold py-3'>Imformation of the mobile that will be displayed</p>
                        <div className="flex gap-5 items-center">
                            <div className='flex gap-1 items-center'>
                                <AiOutlineUser />
                                <p>Author Name</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <AiOutlineFieldTime />
                                <p> Date</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[330px] h-auto shadow-md my-5">
                    {/* individual blog */}
                    <div className="w-full">
                        {/* image section */}
                        <img src="blog/blog-1.jpg" />
                    </div>
                    <div className="h-auto flex flex-col px-5 py-6 border">
                        {/* text section */}
                        <p>Mobile</p>
                        <p className='text-xl font-bold py-3'>Imformation of the mobile that will be displayed</p>
                        <div className="flex gap-5 items-center">
                            <div className='flex gap-1 items-center'>
                                <AiOutlineUser />
                                <p>Author Name</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <AiOutlineFieldTime />
                                <p> Date</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}