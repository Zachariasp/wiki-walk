
const cloudController = async function(req, res) {
    try {
      const response = await fetch(`http://localhost:5000/`);
      const jsonData = await response.json();
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };


  export default cloudController;

