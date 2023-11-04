import Carosul from "../components/client/carosel";
import DisplayBlog from "../components/server/displayBlog";
import Hero from "../components/server/hero";

export default function Unauthorized() {

  return (
    <div className="min-h-[411px]">
      <div className="max-w-6xl mx-auto">
        <Hero />
        <DisplayBlog title={"Recent blog"} />
        <Carosul />
        <DisplayBlog title={"Most viewed blog"} />
      </div>
    </div>
  );
}