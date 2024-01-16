import "./Global.css";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import heroBg from "./images/hero-bg.jpg";
import video from "./images/video.mp4";
import Hero from "./components/ui/hero";
import About from "./components/ui/about";
import BusinessSupport from "./components/ui/businessSupport";
import Specjalizacja from "./components/ui/specjalizacja";
import Zyskujesz from "./components/ui/zyskujesz";
import If from "./components/ui/if";
import Try from "./components/ui/try";

function App() {
  return (
    <div className="relative">
      <div className="absolute -z-20 top-40 left-0 w-full">
        <video src={video} autoPlay loop muted playsInline></video>
        {/* <img src={heroBg} alt="hero" /> */}
      </div>
      <div className="wrapper px-6">
        <Header />
        <main>
          <Hero />
          <BusinessSupport />
          <Specjalizacja />
          <If />
          <Try />
          <Zyskujesz />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
