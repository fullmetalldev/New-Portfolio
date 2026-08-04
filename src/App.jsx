import "./App.css";
import Header from "./layout/Header/Header";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";
import Work from "./sections/Work/Work";
import Projects from "./sections/Projects/Projects";
import Contacts from "./sections/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <TechStack />
        <Work />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
