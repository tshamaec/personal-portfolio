//Components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <>
        <Nav />

        <main className="main">
          {/* Hero Section */}
          <Hero />
          {/* /Hero Section */}
          {/* About Section */}
          <About />
          {/* /About Section */}
          {/* Skills Section */}
          <Skills />
          {/* /Skills Section */}
          {/* Resume Section */}
          <Resume />
          {/* /Resume Section */}
          {/* Portfolio Section */}
          <Portfolio />
          {/* /Portfolio Section */}
          {/* Contact Section */}
          <Contact />
          {/* /Contact Section */}
        </main>
        <Footer />
      </>
    </>
  );
}
export default App;
