import { useState } from 'react'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImagesByQuery } from './images-api';
import toast, { Toaster } from 'react-hot-toast';

import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  function openModal(imageUrl, imageDescription) {
    setIsOpen(true);
    setModalUrl(imageUrl);
    setModalDesc(imageDescription);

  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const handleSearch = async (query) => {
    try {
      setImages([]);
      setShowBtn(false);
	    setError(false);
      setLoading(true);
      const { results, total_pages } = await fetchImagesByQuery(query, page);
      if (total_pages === 0) {
        toast.error("No image found!");
			  return;
      } else {
        setImages(prevState => {
          return [...prevState, ...results];
        });
        setPage(page + 1);
        setShowBtn(total_pages && total_pages !== page);
        setQuery(query);
        console.log(query);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      console.log(query);
	    setError(false);
      setLoading(true);
      const { results, total_pages } = await fetchImagesByQuery(query, page);
      setImages(prevState => {
          return [...prevState, ...results];
      });
      setPage(page + 1);
      setShowBtn(total_pages && total_pages !== page);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
      {showBtn && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <Toaster position="top-right" />
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} imageU={modalUrl} imageDesc={modalDesc} />
    </>
  )
}

export default App
