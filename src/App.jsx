import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageList from './components/ImageList/ImageList';
import Image from './components/Image/Image';
import imagesData from './data/images.json';
import './App.scss';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesData);
  }, []);

  const addNewPhoto = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      const newImage = {
        id: Date.now().toString(),
        url: data[0].url,
        title: `Cat ${images.filter(img => img.title.startsWith('Cat')).length + 1}`
      };
      setImages(prevImages => [...prevImages, newImage]);
    } catch (error) {
      console.error('Error fetching new cat image:', error);
    }
  };

  // Memoize the images to cache them
  const memoizedImages = useMemo(() => {
    return images.map(img => ({
      ...img,
      memoizedUrl: img.url
    }));
  }, [images]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <ImageList images={memoizedImages} addNewPhoto={addNewPhoto} />
          } />
          <Route path="/image/:id" element={
            <Image images={memoizedImages} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
