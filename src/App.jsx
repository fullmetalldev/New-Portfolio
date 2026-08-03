import "./App.css";
import Header from "./layout/Header/Header";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <TechStack />
      </main>
    </>
  );
}

export default App;
