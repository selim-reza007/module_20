import { cookies } from "next/headers";
import Header from "../components/client/header";
import Footer from "../components/server/footer";

export default async function Layout({ children }) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    let loginStatus;
    if (token !== undefined) {
        loginStatus = true;
    } else {
        loginStatus = false;
    }

    return (
        <div className="h-screen">
            <Header login={loginStatus} />
            <div className="min-h-[411px] max-w-6xl mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}