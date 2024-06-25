import { useState } from 'react'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImagesByQuery } from './images-api';

import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (query) => {
    try {
	  setImages([]);
	  setError(false);
      setLoading(true);
      const result = await fetchImagesByQuery(query, page);
      setImages(result);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <Loader />
      <ErrorMessage />
      {images.lenght > 0 && <ImageGallery source={images} />}
      <LoadMoreBtn />
      <ImageModal />
    </>
  )
}

export default App
