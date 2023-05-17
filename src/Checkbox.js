import { useState } from "react";

const Checkbox = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    return ( 
        <div className={clicked ? "checked" : "unchecked"} onClick={handleClick}></div>
     );
}
 
export default Checkbox;