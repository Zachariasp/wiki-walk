// import { cloudStart, cloudFinish } from "../Word-Cloud/cloudData";


function Sidebar(props) {
const {start, current, finish } = props;

    return(
            <div className="App-sidebar">
                <p>Your starting word is: {start}</p>
                <p>Your word history is: {current.join(" ")}</p>
                <p>You have {7 - current.length} steps left</p>
                <p>Your goal is: {finish}</p>
            </div> 
        )
    };
    
    export default Sidebar;