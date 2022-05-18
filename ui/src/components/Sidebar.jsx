// import { cloudStart, cloudFinish } from "../Word-Cloud/cloudData";


function Sidebar(props) {
const {start, finish } = props;

    return(
            <div className="App-sidebar">
                <p>Your starting word is: {start}</p>
                <p>Your goal is: {finish}</p>
            </div> 
        )
    };
    
    export default Sidebar;