
function Footer() {
const Year = new Date().getFullYear()
    return(
        <div className="App-footer">
            <p>Created By ZDM Designs in {Year}</p>
        </div> 

    )
};

export default Footer;