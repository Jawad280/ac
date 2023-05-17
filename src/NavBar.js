 import logo from "../src/aclogo.png";
 
 const NavBar = () => {
    
    return ( 
        <div className="navbar">
            <img src={logo} className="logo"/>
            <div className="navbar-inner">
                <a className="navbar-link">Home</a>
                <a className="navbar-link">Assassins</a>
                <a className="navbar-link">About</a>
            </div>
        </div>
     );
 }
  
 export default NavBar;
 