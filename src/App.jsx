import { useState } from 'react'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

import './App.css'

function App() {
  
  return (
    <>
      <SearchBar />
      <Loader />
      <ErrorMessage />
      <ImageGallery />
      <LoadMoreBtn />
      <ImageModal />
    </>
  )
}

export default App
