import './App.css';
import { TagCloud } from 'react-tagcloud';
import { cloudData } from './Word-Cloud/cloudData';
import Footer from "./components/Footer";
import Header from './components/Header';

function App() {
  
  const SimpleCloud = () => (
    <TagCloud
      minSize={12}
      maxSize={35}
      tags={cloudData}
      onClick={tag => alert(`'${tag.value}' was selected!`)}
    />
  );
  
  return (
    <div className="App">
      <Header />
      <SimpleCloud />
      <Footer />
    </div>
  );
}

export default App;
