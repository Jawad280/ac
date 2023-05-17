 import logo from "../src/aclogo.png";
 import { Link } from 'react-router-dom';
 
 const NavBar = () => {
    
    return ( 
        <div className="navbar">
            <img src={logo} className="logo"/>
            <div className="navbar-inner">
                <Link className="navbar-link" to="/home">Home</Link>
                <Link className="navbar-link" to="/assassins">Assassins</Link>
                <Link className="navbar-link" to="/about">About</Link>
            </div>
        </div>
     );
 }
  
 export default NavBar;
 