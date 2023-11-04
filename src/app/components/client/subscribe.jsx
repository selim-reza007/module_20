"use client";

export default function Subscribe() {

    return (
        <div className="w-full min-h-[290px] bg-slate-100 pt-24 pb-28 px-28">
            <div className="max-w-xl mx-auto h-64">
                {/* contauner */}
                <div className="text-center mb-10">
                    <p className="my-pooping-fonts font-medium text-xl text-[#20B15A] break-words uppercase pb-7">Subscribe</p>
                    <p className="my-pooping-fonts text-3xl font-semibold break-words leading-10">
                        Subscribe to get the latest<br /> news about us
                    </p>
                    <p className="text-[#8B8B8B] font-medium text-base">Please drop your email below to get daily update about what we do</p>
                </div>
                <div className="w-full">
                    <div className="w-full h-16 px-1 items-center border-black flex border rounded-xl gap-1">
                        <input className="w-[75%] h-[56px] pl-2 focus:outline-none" placeholder="Enter Your Email Address" />
                        <button className="w-[25%] h-[56px] text-white text-lg bg-[#f55f1d] hover:bg-orange-400 rounded-xl">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
