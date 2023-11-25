import React, { Component } from 'react';
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
export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const queryWithoutId = this.state.query.slice(
          this.state.query.indexOf('/') + 1
        );
        const fetchedImages = await fetchImages(
          queryWithoutId,
          this.state.page
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages.hits],
        }));
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  formHandler = query => {
    if (!query.trim()) {
      toast.error('This field must be filled in ');
      return;
    }
    this.setState(() => {
      return {
        images: [],
        query: `${Date.now()}/${query}`,
        page: 1,
      };
    });
  };
  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading } = this.state;
    const visibleImage = images.filter(image => image.length !== 0);
    return (
      <div style={AppStyle}>
        <SearchBar onSubmit={this.formHandler} />
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
        {visibleImage.length > 0 && <Button onClick={this.handleLoadMore} />}
        <Toaster />
        <GlobalStyle />
      </div>
    );
  }
}
