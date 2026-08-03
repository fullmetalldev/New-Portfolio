import "./App.css";
import Header from "./layout/Header/Header";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";
import Work from "./sections/Work/Work";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <TechStack />
        <Work />
      </main>
    </>
  );
}

export default App;
