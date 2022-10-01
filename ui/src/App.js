import React, { useState, useEffect } from 'react';
import './App.scss';
import { TagCloud } from 'react-tagcloud';
import Footer from "./components/Footer";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import cloudData from './Word-Cloud/cloudData';
import cloudController from './controllers/cloudController';


function App() {

  const [mainWord, setMainWord] = useState(cloudData.start);
  const [cloudWords, setCloudWords] = useState(cloudData.data);
  const [currentWord, setCurrentWord] = useState([cloudData.start]);
  
  const handleClick = (tagValue) => {
    try {
      setCloudWords(cloudWords === cloudData.data ? cloudData.newData : cloudData.data);

      console.log(tagValue);
      setCurrentWord(currentWord => [...currentWord, tagValue])
    } catch (err) {
      console.error(err);
    }
  };

  const SimpleCloud = () => (
    <TagCloud
      minSize={12}
      maxSize={35}
      tags={cloudWords}
      onClick={tag => handleClick(tag.value)}
    />
  );

  useEffect(() => {
    setMainWord(cloudData.start);
  }, [cloudWords]);
  
  return (
    <div className="App">
      <Header />
      <div className="container window">
      <Sidebar start={mainWord} current={currentWord} finish={cloudData.finish} />
      <SimpleCloud />
      </div>
      <Footer />

    </div>
  );
}

export default App;
