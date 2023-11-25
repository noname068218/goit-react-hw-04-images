import { Component } from 'react';
import { ImageItem, Image } from './ImageGallery.style';
import { Modal } from 'components/Modal_image/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;

    return (
      <>
        <ImageItem onClick={this.openModal}>
          <Image src={webformatURL} alt="" />
        </ImageItem>
        {isModalOpen && (
          <Modal
            imageUrl={largeImageURL}
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
