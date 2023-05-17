import { useEffect, useState } from "react";

const Tile = (props) => {

    const { pic, name, content } = props.details;

    const [clicked, setClicked] = useState(false);

    const handleClickEvent = () => {
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    const info = () => {
        if (clicked) {
            return <div className="tile-content-container">
                        <div className="tile-content">{content}</div>
                   </div> 
            
        } else {
            return <div>
                        <img src={pic} className="tile-image" alt={name}/>
                        <div className="tile-name">{name}</div>
                    </div>
        }
    };

    return ( 
        <div className="tile" onClick={handleClickEvent}>
            {info()}
        </div>
     );
}
 
export default Tile;