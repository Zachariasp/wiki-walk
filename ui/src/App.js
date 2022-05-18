import './App.scss';
import { TagCloud } from 'react-tagcloud';
import Footer from "./components/Footer";
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const cloudData = require('./Word-Cloud/cloudData');

function App() {


  const SimpleCloud = () => (
    <TagCloud
      minSize={12}
      maxSize={35}
      tags={cloudData.data}
    />
  );
  
  return (
    <div className="App">
      <Header />
      <Sidebar start={cloudData.start} finish={cloudData.finish} />
      <SimpleCloud  className="App__Screen__SimpleCloud"/>
      <Footer />

    </div>
  );
}

export default App;
