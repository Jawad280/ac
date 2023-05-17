import Home from "./Home";
import TileCollection from "./TileCollection";
import About from "./About";
import NavBar from "./NavBar";

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}/>
          </Routes>

          <Routes>
            <Route path="/assassins" element={<TileCollection />}/>
          </Routes>

          <Routes>
            <Route path="/about" element={<About />}/>
          </Routes>

        </div>
      </div>
    </Router>
    
  );
}

export default App;
