import logo from "../src/aclogo.png";

const Home = () => {
    return ( 
        <div className="home">
            <img src={logo} className="home-logo"/>
            <button>Join The Brotherhood</button>
        </div>
     );
}
 
export default Home;
