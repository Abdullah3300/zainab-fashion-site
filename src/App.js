import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Home from "./components/home";
import Boards from "./components/boards";
import Illustrations from "./components/illustrations";
import Drapings from "./components/drapings";
import Shoot from "./components/shoot";
// import ResearchDetails from "./components/researchDetails";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <div className="text-center p-8 md:p-12 text-lg font-semibold -mb-7 text-white bg-black">
        <h3 className="flex items-center justify-center gap-5 uppercase">
          <span className="text-xl">
            <FaQuoteLeft />
          </span>
          To die - to be really dead - that must be glorious.{" "}
          <span className="text-xl">
            <FaQuoteRight />
          </span>
        </h3>
        <p className="text-xs mt-6 md:mx-44 text-justify">
          Fashion Design is a creative and dynamic field that involves the
          process of creating clothing and accessories. It encompasses a range
          of activities including sketching designs, selecting fabrics, creating
          prototypes, and understanding trends. In this course we learn about
          fashion history, textile science, garment construction, and the
          business aspects of the fashion industry. The course combines artistic
          talent with technical skills to prepare students for careers in the
          fashion industry.
        </p>
      </div>
      <Gallery />
      <Boards />
      <Illustrations />
      <Drapings />
      <Shoot />
      <Footer />
    </div>
  );
}

export default App;
