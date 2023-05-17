import { useState } from "react";

const Tenet = (props) => {
    const { num, text } = props;

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    const tenetInfo = () => {
        if (clicked) {
            return <div>
                <h1>{num}</h1>
                <div>{text}</div>
            </div>
        } else {
            return <div>
                <h1>{num}</h1>
            </div>
        }
    }
    
    return ( 
        <div className={clicked ? "tenet-clicked" : "tenet"} onClick={handleClick}>
            {tenetInfo(num, text)}
        </div>
     );
}
 
export default Tenet;