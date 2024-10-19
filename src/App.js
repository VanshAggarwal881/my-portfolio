import About from "./components/About";
import Experience from "./components/Experience";
import Form from "./components/Form";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <Form />
    </div>
  );
}

export default App;
