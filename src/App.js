import Home from "./Home";
import NavBar from "./NavBar";
import TileCollection from "./TileCollection";
import About from "./About";
import Made from "./Made";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <TileCollection />
      <About />
      <Made />
    </div>
  );
}

export default App;
