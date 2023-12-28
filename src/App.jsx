import "./Global.css";
import BusinessSupport from "./components/ui/businessSupport";
import Header from "./components/ui/header";
import Hero from "./components/ui/hero";

function App() {
  return (
    <main className="w-full max-w-[1564px] mx-auto">
      <Header />
      <Hero />
      <BusinessSupport />
    </main>
  );
}

export default App;
