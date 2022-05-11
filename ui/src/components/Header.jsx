import { cloudStart } from "../Word-Cloud/cloudData";

function Header() {

    return(
            <div className="App-header">
                <p>Your word is: {cloudStart}</p>
            </div> 
        )
    };
    
    export default Header;