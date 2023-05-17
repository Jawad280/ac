import Checkbox from "./Checkbox";

const Join = () => {

    return ( 
        <div className="join">
            <div className="join-details">
                <div>Assassin Name</div>
                <input placeholder="Enter Your Name" className="join-detail-input"/>
            </div>

            <div className="join-details">
                <div>Country of Origin</div>
                <input placeholder="Enter Where You Are From" className="join-detail-input"/>
            </div>

            <div className="join-checkbox-container">
                <div className="join-checkbox">
                    <Checkbox />
                    <div>I agree to join the creed</div>
                </div>

                <div className="join-checkbox">
                    <Checkbox />
                    <div>I agree to fight for the creed</div>
                </div>

                <div className="join-checkbox">
                    <Checkbox />   
                    <div>I agree to die for creed</div>
                </div>
            </div>

            <button>Submit</button>

        </div>
     );
}
 
export default Join;