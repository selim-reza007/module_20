import Header from "../components/client/header";
import Footer from "../components/server/footer";

export default function Layout({ children }) {
    return (
        <div className="h-screen">
            <Header />
            <div className="min-h-[411px] max-w-6xl mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}