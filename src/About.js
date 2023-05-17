import Tenet from "./Tenet";

const About = () => {

    const tenets = [
        {
            num: 1,
            text: "Stay your blade from the flesh of an innocent"
        }, 
        {
            num: 2,
            text: "Hide in plain sight"
        },
        {
            num: 3,
            text: "Never Compromise the Brotherhood"
        }
    ]

    return ( 
        <div className="about">
            <h2>About the Brotherhood</h2>
            <div className="about-text">The Assassin's Creed, often referred to as the Creed, was a code and guiding philosophy of the Assassin Order upheld from the High Middle Ages until the modern era. It restricted unnecessary slaughter of innocents, preserved the reputation of oneself and of the Order, and was meant to create peace not only within the world, but within the individual.</div>
            
            <div className="about-tenet">
                {
                    tenets.map(t => <Tenet num={t.num} text={t.text}/>)
                }
            </div>
        </div>       
     );
}
 
export default About;