import Link from "next/link";
import BackButton from "../../components/client/BacktoHome";

export default function Layout({ children }) {

    return (
        <div className="min-h-screen w-full bg-green-200">
            <div className="min-h-screen w-full flex">
                <div className="w-[200px] bg-slate-100 flex flex-col gap-2 items-center pt-10">
                    <Link className="text-xl font-semibold py-2 px-5 bg-red-200 w-40 rounded-lg" href={'/dashboard'}>Home</Link>
                    <Link className="text-xl font-semibold py-2 px-5 bg-red-200 w-40 rounded-lg" href={'/dashboard/blogadd'}>Add Blog</Link>
                    <BackButton />
                </div>
                <div className="mt-10 ml-5">
                    {children}
                </div>
            </div>
        </div>
    );
}