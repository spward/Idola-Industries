import "./App.scss";
import { Header } from "./components/Header";
import { Companies } from "./components/Companies";
import { Industries } from "./components/Industries";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Join } from "./components/Join";
import { Hero } from "./components/Hero";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Industries />
      <Companies />
      <Testimonials />
      <Stats />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
