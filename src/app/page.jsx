import Carosul from "../components/client/carosel";
import Header from "../components/client/header";
import DisplayBlog from "../components/server/displayBlog";
import Footer from "../components/server/footer";
import Hero from "../components/server/hero";


export default function Home() {

  return (
    <div>
      <Header />
      <div className="min-h-[411px]">
        <div className="max-w-6xl mx-auto">
          <Hero />
          <DisplayBlog title={"Recent blog"} />
          <Carosul />
          <DisplayBlog title={"Most viewed blog"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}