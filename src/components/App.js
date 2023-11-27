import { useState, useEffect } from 'react';
import { GlobalStyle } from './Global';
import { SearchBar } from './Searchbar/SearchBar';
import { fetchImages } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/GalleryItem';
import { Dna } from 'react-loader-spinner';
import { Button } from './Button/Button';
import toast, { Toaster } from 'react-hot-toast';

const AppStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
};

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchData = async () => {
      try {
        setisLoading(true);
        const queryWithoutId = query.slice(query.indexOf('/') + 1);
        const fetchedImages = await fetchImages(queryWithoutId, page);
        setImages(prevImages => [...prevImages, ...fetchedImages.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setisLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const formHandler = query => {
    if (!query.trim()) {
      toast.error('This field must be filled in');
      return;
    }

    setImages([]);
    setQuery(`${Date.now()}/${query}`);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div style={AppStyle}>
      <SearchBar onSubmit={formHandler} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading && (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
      </div>

      <ImageGallery imagesList={images} />

      <ImageGalleryItem />
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      <Toaster />
      <GlobalStyle />
    </div>
  );
};
