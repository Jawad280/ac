import logo from "../src/aclogo.png";
import Join from "./Join";
import { useState } from "react";

const Home = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    const joinForm = () => {
        if (clicked) {
            return <Join />
        }
    }

    return ( 
        <div className="home">
            <img src={logo} className="home-logo"/>
            <button onClick={handleClick}>Join The Brotherhood</button>
            {joinForm()}
        </div>
     );
}
 
export default Home;
