import Hero from "./pages/Hero";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
